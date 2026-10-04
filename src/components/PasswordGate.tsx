import { useState, type FormEvent } from "react";
import { Dog, Flower2, Guitar, Sparkles, X } from "lucide-react";
import hintAsset from "@/assets/birthday-date-hint.png.asset.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function formatDate(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 6);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

function Jhumka({ className }: { className: string }) {
  return (
    <div className={`absolute text-sun/25 ${className}`} aria-hidden>
      <span className="mx-auto block h-5 w-px bg-current" />
      <span className="block h-8 w-10 rounded-t-full border border-current" />
      <span className="mx-auto block size-2 rotate-45 border border-current" />
    </div>
  );
}

export function PasswordGate() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showHint, setShowHint] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password.length !== 8) {
      setError("Complete the date first.");
      return;
    }

    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/public/unlock", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ password }),
        credentials: "same-origin",
      });
      if (response.redirected) {
        if (new URL(response.url).pathname === "/") {
          window.location.assign("/");
          return;
        }
        setError("The date was accepted, but the page could not be opened. Please try again.");
        return;
      }
      const result = (await response.json()) as { ok?: boolean };
      if (!response.ok) throw new Error("Unlock request failed");
      if (!result.ok) {
        setError("Not quite. Try the date that belongs to this photo.");
        return;
      }
      window.location.assign("/");
    } catch {
      setError("Something went wrong. Please try once more.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="relative isolate flex min-h-screen overflow-hidden bg-night px-5 py-8 font-sans text-cream sm:px-8">
      <div className="grain-flicker" aria-hidden />
      <Flower2 className="absolute -left-7 top-10 size-32 rotate-12 stroke-[1] text-sun/25 sm:left-8 sm:size-40" aria-hidden />
      <Guitar className="absolute -right-10 top-16 size-36 -rotate-12 stroke-[1] text-sun/20 sm:right-8 sm:size-44" aria-hidden />
      <Dog className="absolute -bottom-8 left-3 size-36 -rotate-6 stroke-[1] text-sun/20 sm:bottom-8 sm:left-14" aria-hidden />
      <Flower2 className="absolute -bottom-10 -right-8 size-40 -rotate-12 stroke-[1] text-sun/20 sm:right-12" aria-hidden />
      <Jhumka className="left-[18%] top-[23%] -rotate-12" />
      <Jhumka className="bottom-[18%] right-[18%] rotate-12" />

      <section className="relative z-10 m-auto w-full max-w-md text-center">
        <div className="mb-6 flex items-center justify-center gap-3 text-sunlite/80" aria-hidden>
          <span className="h-px w-12 bg-sun/50" />
          <Sparkles className="size-4" />
          <span className="h-px w-12 bg-sun/50" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sunlite">private issue · 001</p>
        <h1 className="mt-4 font-serif text-5xl font-semibold leading-none text-cream sm:text-6xl">You know the date.</h1>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-cream/60">
          One little date stands between you and the birthday edition.
        </p>

        <form onSubmit={submit} className="mt-9" noValidate>
          <label htmlFor="birthday-date" className="sr-only">Enter the password date</label>
          <Input
            id="birthday-date"
            name="birthday-date"
            value={password}
            onChange={(event) => {
              setPassword(formatDate(event.target.value));
              if (error) setError("");
            }}
            inputMode="numeric"
            autoComplete="off"
            placeholder="__/__/__"
            maxLength={8}
            aria-describedby={error ? "date-error" : undefined}
            aria-invalid={Boolean(error)}
            className="h-16 rounded-none border-0 border-b border-sun/50 bg-transparent px-2 text-center font-serif text-4xl tracking-[0.16em] text-cream shadow-none placeholder:text-cream/25 focus-visible:border-sunlite focus-visible:ring-0 sm:text-5xl"
            autoFocus
          />
          <div className="mt-3 min-h-5" aria-live="polite">
            {error ? <p id="date-error" className="text-sm text-rose">{error}</p> : null}
          </div>
          <Button
            type="submit"
            disabled={submitting}
            variant="outline"
            className="mt-5 h-12 w-full rounded-none border-sun/70 bg-transparent font-semibold uppercase tracking-[0.16em] text-sunlite shadow-none hover:bg-sun/10 hover:text-sunlite active:bg-sun active:text-night"
          >
            {submitting ? "checking…" : "open the issue"}
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={() => setShowHint(true)}
            className="mt-3 h-10 w-full rounded-none text-sm text-cream/55 hover:bg-transparent hover:text-sunlite"
          >
            I need a hint
          </Button>
        </form>
      </section>

      {showHint ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-night/95 p-5" role="dialog" aria-modal="true" aria-labelledby="hint-title">
          <div className="grain-flicker" aria-hidden />
          <div className="relative z-10 w-full max-w-sm">
            <Button
              type="button"
              size="icon"
              variant="outline"
              onClick={() => setShowHint(false)}
              aria-label="Close hint"
              className="absolute -right-2 -top-2 z-20 rounded-full border-sun/60 bg-night text-sunlite hover:bg-sun hover:text-night active:bg-sun active:text-night"
            >
              <X />
            </Button>
            <div className="rotate-1 border border-sun/40 bg-deep p-2 shadow-2xl shadow-night">
              <img src={hintAsset.url} alt="A film strip of a couple together" className="max-h-[66vh] w-full object-contain" />
            </div>
            <p id="hint-title" className="mt-5 text-center font-serif text-2xl italic text-sunlite">
              the date this became official.
            </p>
          </div>
        </div>
      ) : null}
    </main>
  );
}
