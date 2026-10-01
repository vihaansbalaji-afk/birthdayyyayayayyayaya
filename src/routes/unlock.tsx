import { createFileRoute } from "@tanstack/react-router";
import { PasswordGate } from "@/components/PasswordGate";

export const Route = createFileRoute("/unlock")({
  head: () => ({
    meta: [
      { title: "Private Birthday Issue — Enter the Date" },
      { name: "description", content: "A private birthday zine, unlocked with one special date." },
      { property: "og:title", content: "Private Birthday Issue" },
      { property: "og:description", content: "A private birthday zine, unlocked with one special date." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: PasswordGate,
});
