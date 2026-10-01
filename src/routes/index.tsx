import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import mixtape from "@/assets/mixtape.jpg";
import sunflower1 from "@/assets/sunflower-1.jpg";
import sunflower2 from "@/assets/sunflower-2.jpg";
import sunflower3 from "@/assets/sunflower-3.jpg";
import sunflower4 from "@/assets/sunflower-4.jpg";

export const Route = createFileRoute("/")({
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

const stickers = [
  { label: "arijit singh, no notes", bg: "bg-sun", text: "text-night", ring: "ring-sun/40", dot: "bg-night", delay: "" },
  { label: "anuv jain at 2a.m.", bg: "bg-petrol", text: "text-night", ring: "ring-petrol/40", dot: "bg-night", delay: ".3s" },
  { label: "4 chords and the truth", bg: "bg-rose", text: "text-cream", ring: "ring-rose/40", dot: "bg-cream", delay: ".6s" },
  { label: "stops for every single dog", bg: "bg-royal", text: "text-sunlite", ring: "ring-cream/15", dot: "bg-sunlite", delay: ".9s" },
  { label: "the playlist is the gift", bg: "bg-deep", text: "text-cream", ring: "ring-cream/15", dot: "bg-electric", delay: "1.2s" },
  { label: "[inside joke: that one meme]", bg: "bg-electric", text: "text-cream", ring: "ring-electric/40", dot: "bg-cream", delay: "1.5s" },
];

function Index() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-night font-sans text-cream antialiased">
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
          <div className="mx-auto max-w-[64ch]">
            <h2 className="font-serif text-balance text-5xl font-semibold leading-none text-cream sm:text-7xl">
              sticker wall
            </h2>
            <p className="mt-4 text-sm text-cream/60">
              favorites, doodled in. (inside-joke placeholders — swap with the real ones.)
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {stickers.map((s) => (
                <div
                  key={s.label}
                  className={`sticker-peek inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ring-1 ${s.bg} ${s.text} ${s.ring}`}
                  style={s.delay ? { animationDelay: s.delay } : undefined}
                >
                  <span className={`size-2.5 rotate-45 ${s.dot}`} />
                  {s.label}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[min(1vw,12px)] bg-deep p-6 ring-1 ring-cream/10">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cream/50">
                top 5, unranked, do not ask
              </span>
              <ul className="mt-4 space-y-3 text-base text-cream/85">
                <li className="flex items-center gap-3">
                  <span className="size-3 rotate-45 bg-sun" />
                  Arijit Singh — the whole discography, no skips
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-3 rotate-45 bg-petrol" />
                  Anuv Jain — the 2a.m. soft boy, officially
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-3 rotate-45 bg-rose" />
                  Sunflowers — the yellow we cannot get enough of
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-3 rotate-45 bg-electric" />
                  Guitar — learned the intro once, will not let it go
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-3 rotate-45 bg-cream" />
                  Dogs — every single one, pointed at out loud
                </li>
              </ul>
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
