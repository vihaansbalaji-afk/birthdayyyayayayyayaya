import { useCallback, useEffect, useRef, useState } from "react";
import introAsset from "@/assets/intro.mp4.asset.json";

const INTRO_SECONDS = 10;

/**
 * Full-screen video intro. Plays the uploaded clip (first 10 seconds),
 * then fades out to reveal the zine. Skippable, with a sound toggle
 * (autoplay must start muted).
 */
export function VideoIntro() {
  const [phase, setPhase] = useState<"play" | "fading" | "gone">("play");
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const dismiss = useCallback(() => {
    setPhase((p) => (p === "play" ? "fading" : p));
  }, []);

  useEffect(() => {
    const hostname = window.location.hostname;
    const isEditingPreview =
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname.startsWith("id-preview--");

    if (isEditingPreview) {
      setPhase("gone");
      return;
    }

    if (phase !== "play") return;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(dismiss, INTRO_SECONDS * 1000);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [phase, dismiss]);

  useEffect(() => {
    if (phase !== "fading") return;
    const t = window.setTimeout(() => setPhase("gone"), 700);
    return () => window.clearTimeout(t);
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-night transition-opacity duration-700 ${
        phase === "fading" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden={phase === "fading"}
    >
      <video
        ref={videoRef}
        src={introAsset.url}
        autoPlay
        muted={muted}
        loop
        playsInline
        className="size-full object-cover"
      />

      {/* grain so the intro matches the zine */}
      <div className="grain-flicker" aria-hidden />

      {/* caption + controls */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 bg-gradient-to-t from-night/70 to-transparent px-5 pb-6 pt-20 sm:px-8">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cream/80">
          <span className="size-2.5 rotate-45 bg-sun" />
          issue 001 · now opening
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              const next = !muted;
              setMuted(next);
              if (videoRef.current) videoRef.current.muted = next;
            }}
            className="rounded-full bg-deep px-4 py-2 text-sm font-semibold text-cream ring-1 ring-cream/25 transition-colors hover:bg-royal"
          >
            {muted ? "sound on?" : "sound off"}
          </button>
          <button
            type="button"
            onClick={dismiss}
            className="rounded-full bg-sun px-4 py-2 text-sm font-semibold text-night ring-1 ring-sun/40 transition-colors hover:bg-sunlite"
          >
            skip →
          </button>
        </div>
      </div>
    </div>
  );
}
