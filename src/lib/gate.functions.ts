import { createHash, timingSafeEqual } from "node:crypto";
import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getRequestUrl, useSession } from "@tanstack/react-start/server";
import { z } from "zod";

const gateInput = z.object({
  password: z.string().regex(/^\d{2}\/\d{2}\/\d{2}$/).max(8),
});

type GateSession = { unlocked?: boolean };

function sessionConfig() {
  const secret = process.env["SESSION_SECRET"];
  if (!secret || secret.length < 32) throw new Error("SESSION_SECRET is not configured");
  return {
    password: secret,
    name: "birthday-zine-gate-v2",
    // no maxAge: session cookie, so the gate returns when the browser is closed
    cookie: { httpOnly: true, secure: true, sameSite: "lax" as const, path: "/" },
  };
}

function passwordMatches(input: string, expected: string) {
  const inputDigest = createHash("sha256").update(input, "utf8").digest();
  const expectedDigest = createHash("sha256").update(expected, "utf8").digest();
  return timingSafeEqual(inputDigest, expectedDigest);
}

export const unlockSite = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => gateInput.parse(input))
  .handler(async ({ data }) => {
    const expected = process.env["SITE_PASSWORD"];
    if (!expected) throw new Error("SITE_PASSWORD is not configured");

    if (!passwordMatches(data.password, expected)) return { ok: false as const };

    const session = await useSession<GateSession>(sessionConfig());
    await session.update({ unlocked: true });
    return { ok: true as const };
  });

export const requireBirthdayAccess = createServerFn({ method: "GET" }).handler(async () => {
  const hostname = getRequestUrl().hostname;
  const isEditingHost =
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname.startsWith("id-preview--");
  if (isEditingHost) return { unlocked: true as const };

  const session = await useSession<GateSession>(sessionConfig());
  if (!session.data.unlocked) throw redirect({ to: "/unlock" });
  return { unlocked: true as const };
});
