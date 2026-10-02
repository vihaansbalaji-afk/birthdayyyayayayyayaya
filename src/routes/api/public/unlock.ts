import { createHash, timingSafeEqual } from "node:crypto";
import { createFileRoute } from "@tanstack/react-router";
import { useSession } from "@tanstack/react-start/server";
import { z } from "zod";

const unlockInput = z.object({
  password: z.string().regex(/^\d{2}\/\d{2}\/\d{2}$/).max(8),
});

type GateSession = { unlocked?: boolean };

function passwordMatches(input: string, expected: string) {
  const inputDigest = createHash("sha256").update(input, "utf8").digest();
  const expectedDigest = createHash("sha256").update(expected, "utf8").digest();
  return timingSafeEqual(inputDigest, expectedDigest);
}

export const Route = createFileRoute("/api/public/unlock")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let input: unknown;
        try {
          input = await request.json();
        } catch {
          return Response.json({ ok: false }, { status: 400 });
        }

        const parsed = unlockInput.safeParse(input);
        const expected = process.env["SITE_PASSWORD"];
        const sessionSecret = process.env["SESSION_SECRET"];
        if (!expected || !sessionSecret || sessionSecret.length < 32 || !parsed.success) {
          return Response.json({ ok: false }, { status: 400 });
        }

        if (!passwordMatches(parsed.data.password, expected)) {
          return Response.json({ ok: false });
        }

        const session = await useSession<GateSession>({
          password: sessionSecret,
          name: "birthday-zine-gate",
          maxAge: 60 * 60 * 24 * 30,
          cookie: { httpOnly: true, secure: true, sameSite: "lax", path: "/" },
        });
        await session.update({ unlocked: true });

        return Response.json({ ok: true });
      },
    },
  },
});