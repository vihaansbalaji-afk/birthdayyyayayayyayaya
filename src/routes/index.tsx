import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import mixtape from "@/assets/mixtape.jpg";
import sunflower1 from "@/assets/sunflower-1.jpg";
import sunflower2 from "@/assets/sunflower-2.jpg";
import sunflower3 from "@/assets/sunflower-3.jpg";
import sunflower4 from "@/assets/sunflower-4.jpg";
import arijitPrint from "@/assets/arijit-singh-print.png.asset.json";
import anuvReceipt from "@/assets/anuv-jain-receipt.png.asset.json";
import { VideoIntro } from "@/components/VideoIntro";
import { requireBirthdayAccess } from "@/lib/gate.functions";
import { Flower2, Headphones, Music2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  loader: () => requireBirthdayAccess(),
  head: () => ({
    meta: [
      { title: "Sunflower Side of the Moon — Issue 001" },
      {
        name: "description",
        content:
          "A one-page zine for the girl with Arijit Singh on repeat, Anuv Jain in her earbuds, and too many sunflowers in her room.",
      },
      { property: "og:title", content: "Sunflower Side of the Moon" },
      {
        property: "og:description",
        content:
          "A one-page zine for the girl with Arijit Singh on repeat, Anuv Jain in her earbuds, and too many sunflowers in her room.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-night font-sans text-cream antialiased">
      <VideoIntro />
      {/* overprint glow blobs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-32 -left-24 size-[520px] rounded-full bg-electric/40 blur-[120px]" />
        <div className="absolute top-1/3 -right-28 size-[560px] rounded-full bg-sun/30 blur-[130px]" />
        <div className="absolute -bottom-40 left-1/4 size-[520px] rounded-full bg-petrol/25 blur-[130px]" />
      </div>

      <div className="grain-flicker" aria-hidden />

      <div className="relative z-10">
        {/* nav */}
        <div className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-cream/10 bg-night/80 px-5 py-3 backdrop-blur-sm sm:px-8">
          <div className="flex items-center gap-2">
            <span className="size-3 rotate-45 bg-sun" />
            <span className="font-serif text-xl italic text-sunlite">
              SUNFLOWER&nbsp;SIDE&nbsp;OF&nbsp;THE&nbsp;MOON
            </span>
          </div>
          <nav className="hidden gap-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/70 sm:flex">
            <a href="#mix" className="hover:text-sunlite">mix</a>
            <a href="#sun" className="hover:text-sunlite">sun</a>
            <a href="#wall" className="hover:text-sunlite">wall</a>
          </nav>
          <a
            href="#wall"
            className="inline-flex items-center gap-2 rounded-full bg-sun px-3 py-1.5 text-sm font-semibold text-night ring-1 ring-sun/40 transition-colors hover:bg-sunlite"
          >
            <span className="size-1.5 rotate-45 bg-night" />
            gift me
          </a>
        </div>

        {/* hero */}
        <section className="relative px-5 pt-14 pb-20 sm:px-8 sm:pt-20 sm:pb-28">
          <div className="mx-auto max-w-[64ch]">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-deep px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-sunlite ring-1 ring-cream/10">
              <span className="size-2 rotate-45 bg-rose" />
              issue 001 · risograph edition · 1a.m.
            </p>
            <h1 className="font-serif text-balance text-6xl font-semibold leading-[0.92] tracking-tight sm:text-8xl">
              <span className="block text-cream">HAPPY BIRTHDAYY</span>
              <span className="block text-sunlite">GAYATHRIII</span>
            </h1>
            <p className="mt-7 max-w-[52ch] text-pretty text-base leading-relaxed text-cream/75 sm:text-lg">
              A one-page zine for the girl who has Arijit Singh on repeat, Anuv Jain in her earbuds, a guitar
              she actually plays, and an unreasonable amount of sunflowers. Also: cannot walk past a dog.
              No love letters. Just stickers and a very specific playlist.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#mix"
                className="inline-flex items-center gap-2 rounded-full bg-sun px-5 py-2.5 text-sm font-semibold text-night ring-1 ring-sun/40 transition-colors hover:bg-sunlite"
              >
                <span className="size-2 rotate-45 bg-night" />
                open the mixtape
              </a>
              <a
                href="#wall"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-cream ring-1 ring-cream/25 transition-colors hover:bg-deep"
              >
                sticker wall
              </a>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:mt-16 sm:grid-cols-4 sm:gap-6">
            <div className="col-span-2 overflow-hidden rounded-[min(1vw,12px)] outline-1 -outline-offset-1 outline-cream/10">
              <img
                src={portrait}
                alt="Risograph portrait with sunflowers"
                width={1024}
                height={1024}
                className="aspect-[3/4] h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-end rounded-[min(1vw,12px)] bg-royal p-5 ring-1 ring-cream/10">
              <span className="size-4 rotate-45 bg-sunlite" />
              <p className="mt-3 font-serif text-3xl font-semibold leading-none text-sunlite">07</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/60">sunflowers counted</p>
            </div>
            <div className="flex flex-col justify-end rounded-[min(1vw,12px)] bg-electric/80 p-5 ring-1 ring-cream/10">
              <span className="size-4 rotate-45 bg-cream" />
              <p className="mt-3 font-serif text-3xl font-semibold leading-none text-cream">∞</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/70">replays this week</p>
            </div>
            <div className="col-span-2 flex items-center gap-4 rounded-[min(1vw,12px)] bg-deep p-5 ring-1 ring-cream/10">
              <span className="size-5 rotate-45 bg-petrol" />
              <p className="font-serif text-lg italic text-cream/80">
                "guitar in one hand, chai in the other, a dog video on loop. that's the whole vibe."
              </p>
            </div>
          </div>
        </section>

        {/* divider */}
        <div className="relative h-14 overflow-hidden bg-royal">
          <div className="overprint absolute inset-0 bg-electric/50" />
          <div className="relative flex h-full items-center justify-center gap-4 text-sunlite">
            <span className="size-3 rotate-45 bg-sunlite" />
            <span className="size-3 rotate-45 bg-sunlite" />
            <span className="size-3 rotate-45 bg-sunlite" />
            <span className="size-3 rotate-45 bg-sunlite" />
            <span className="size-3 rotate-45 bg-sunlite" />
          </div>
        </div>

        {/* mixtape */}
        <section id="mix" className="relative px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[64ch]">
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-serif text-balance text-5xl font-semibold leading-none text-sunlite sm:text-7xl">
                the mixtape
              </h2>
              <span className="hidden text-xs uppercase tracking-[0.22em] text-cream/50 sm:block">
                side a · arijit / anuv
              </span>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <article className="group relative overflow-hidden rounded-[min(1vw,12px)] bg-royal p-6 ring-1 ring-cream/10">
                <span className="absolute -right-3 -top-3 size-16 rotate-45 bg-sun/20" />
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sunlite">arijit singh</span>
                  <span className="size-3 rotate-45 bg-rose" />
                </div>
                <p className="mt-4 font-serif text-3xl font-semibold leading-none text-cream">Tum Hi Ho</p>
                <p className="mt-2 text-sm text-cream/60">played 214× · you'll deny it</p>
                <div className="mt-5 h-1.5 w-full rounded-full bg-cream/10">
                  <div className="h-full w-4/5 rounded-full bg-sun" />
                </div>
              </article>

              <article className="group relative overflow-hidden rounded-[min(1vw,12px)] bg-royal p-6 ring-1 ring-cream/10">
                <span className="absolute -right-3 -top-3 size-16 rotate-45 bg-petrol/20" />
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-petrol">anuv jain</span>
                  <span className="size-3 rotate-45 bg-rose" />
                </div>
                <p className="mt-4 font-serif text-3xl font-semibold leading-none text-cream">The Story</p>
                <p className="mt-2 text-sm text-cream/60">the 2a.m. one, obviously</p>
                <div className="mt-5 h-1.5 w-full rounded-full bg-cream/10">
                  <div className="h-full w-3/5 rounded-full bg-petrol" />
                </div>
              </article>
            </div>

            <div className="mt-5 overflow-hidden rounded-[min(1vw,12px)] outline-1 -outline-offset-1 outline-cream/10">
              <img
                src={mixtape}
                alt="Risograph collage of earbuds, cassettes and sunflower petals"
                loading="lazy"
                width={1600}
                height={912}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* sunflower corner */}
        <section id="sun" className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
          <div className="absolute inset-0 bg-royal/40" />
          <div className="overprint absolute inset-0 bg-sun/10" />
          <div className="relative mx-auto max-w-[64ch]">
            <div className="flex items-center gap-3">
              <span className="size-5 rotate-45 bg-sunlite" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-sunlite">
                the sunflower corner
              </span>
            </div>
            <h2 className="mt-4 font-serif text-balance text-5xl font-semibold leading-none text-cream sm:text-7xl">
              too many sunflowers,
              <br />
              never enough.
            </h2>
            <p className="mt-6 max-w-[48ch] text-pretty text-base leading-relaxed text-cream/75">
              We counted them. We lost count. We bought more. This is the corner of the internet where the yellow wins
              and nobody's keeping score.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { src: sunflower1, alt: "Risograph sunflower close-up" },
                { src: sunflower2, alt: "Risograph sunflower field under indigo sky" },
                { src: sunflower3, alt: "Risograph sunflower petals on dark paper" },
                { src: sunflower4, alt: "Risograph sunflowers in a mason jar" },
              ].map((img) => (
                <div
                  key={img.src}
                  className="overflow-hidden rounded-[min(1vw,12px)] outline-1 -outline-offset-1 outline-cream/10"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="aspect-square w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* sticker wall */}
        <section id="wall" className="relative px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-serif text-balance text-5xl font-semibold leading-none text-cream sm:text-7xl">
              sticker wall
            </h2>
            <p className="mt-4 text-sm text-cream/60">little things, pinned in place · currently on repeat</p>

            <div className="memory-board-frame mt-9">
              <div className="memory-board" role="group" aria-label="A handmade keepsake board for Gayathri">
                <div className="board-bow board-piece" aria-hidden="true" />
                <div className="board-streamer board-piece" aria-label="Stargirl fabric streamer">
                  <span>STARGIRL</span>
                  <small>edition 001</small>
                </div>

                <figure className="memory-polaroid polaroid-left board-piece" aria-label="Blank photo placeholder one">
                  <div className="polaroid-image-slot"><span>photo goes here</span></div>
                  <figcaption className="polaroid-caption" />
                </figure>
                <figure className="memory-polaroid polaroid-right board-piece" aria-label="Blank photo placeholder two">
                  <div className="polaroid-image-slot"><span>photo goes here</span></div>
                  <figcaption className="polaroid-caption" />
                </figure>
                <figure className="memory-polaroid polaroid-bottom board-piece" aria-label="Blank photo placeholder three">
                  <div className="polaroid-image-slot"><span>photo goes here</span></div>
                  <figcaption className="polaroid-caption" />
                </figure>

                <figure className="artist-print artist-arijit board-piece">
                  <img src={arijitPrint.url} alt="Arijit Singh illustrated artist print" />
                  <figcaption>ARJIT SINGH · NO SKIPS</figcaption>
                </figure>
                <figure className="artist-print artist-anuv board-piece">
                  <img src={anuvReceipt.url} alt="Anuv Jain all-time playlist receipt" />
                  <figcaption>THE 2 A.M. SIDE</figcaption>
                </figure>

                <div className="keepsake-ticket board-piece" aria-label="A ticket stub for one more song">
                  <span>ADMIT ONE</span>
                  <strong>one more song</strong>
                  <small>front row · always</small>
                </div>
                <div className="keepsake-note board-piece">
                  <span>current status</span>
                  <strong>playlist on.<br />world off.</strong>
                  <Music2 aria-hidden="true" />
                </div>
                <div className="board-headphones board-piece" aria-hidden="true"><Headphones /></div>
                <div className="board-flower board-piece" aria-hidden="true"><Flower2 /></div>
                <div className="board-sparkle board-piece" aria-hidden="true"><Sparkles /></div>
                <div className="board-music board-piece" aria-hidden="true">♫</div>
                <div className="board-tape board-piece" aria-hidden="true" />
                <p className="board-edition board-piece">a tiny archive of very good taste</p>
              </div>
            </div>
          </div>
        </section>

        {/* footer */}
        <footer className="relative border-t border-cream/10 px-5 py-10 sm:px-8">
          <div className="mx-auto flex max-w-[64ch] flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <span className="size-3 rotate-45 bg-sun" />
              <span className="font-serif text-lg italic text-sunlite">Sunflower Side of the Moon</span>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/50">
              issue 001 · risograph · made at 1a.m. with stickers
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
