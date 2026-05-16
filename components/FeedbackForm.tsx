"use client";

import { useState } from "react";
import { GOOGLE_REVIEW_URL, HAPPY_THRESHOLD } from "@/lib/constants";

type Status = "idle" | "submitting" | "thanks" | "error";

export function FeedbackForm() {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (rating === null || status === "submitting") return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating, feedback }),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        return;
      }

      if (data.isHappy) {
        window.location.href = GOOGLE_REVIEW_URL;
        return;
      }

      setStatus("thanks");
    } catch {
      setStatus("error");
    }
  }

  if (status === "thanks") {
    return (
      <div className="w-full max-w-xl text-center">
        <h1 className="text-3xl font-semibold tracking-tightish text-ink-900 md:text-4xl">
          Thank you.
        </h1>
        <p className="mt-4 text-ink-600 leading-relaxed">
          We've shared your note with the team. We'll use it to do better next
          time — we appreciate you taking the time to tell us.
        </p>
      </div>
    );
  }

  const activeRating = hover ?? rating;

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl rounded-2xl border border-ink-100 bg-white p-8 md:p-12 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
    >
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-400">
        Your feedback
      </p>
      <h1 className="mt-3 text-2xl font-semibold tracking-tightish text-ink-900 md:text-3xl">
        How likely would you be to recommend us to friends and family?
      </h1>

      <div className="mt-8">
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          {[1, 2, 3, 4, 5].map((n) => {
            const isActive = activeRating !== null && n <= activeRating;
            return (
              <button
                key={n}
                type="button"
                aria-label={`${n} out of 5`}
                onClick={() => setRating(n)}
                onMouseEnter={() => setHover(n)}
                onMouseLeave={() => setHover(null)}
                className={`group flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border transition ${
                  isActive
                    ? "border-ink-900 bg-ink-900 text-white"
                    : "border-ink-200 bg-white text-ink-400 hover:border-ink-400"
                }`}
              >
                <Star filled={isActive} />
              </button>
            );
          })}
        </div>
        <div className="mt-3 flex justify-between text-xs font-medium text-ink-400">
          <span>Not likely</span>
          <span>Very likely</span>
        </div>
      </div>

      <div className="mt-10">
        <label
          htmlFor="feedback"
          className="block text-sm font-medium text-ink-800"
        >
          Do you have any feedback for our team on how we could improve?
        </label>
        <textarea
          id="feedback"
          name="feedback"
          rows={4}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Optional — but it really helps."
          className="mt-3 w-full resize-none rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition focus:border-ink-900"
        />
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-400">
          Takes about 10 seconds.
        </p>
        <button
          type="submit"
          disabled={rating === null || status === "submitting"}
          className="rounded-full bg-ink-900 px-6 py-3 text-sm font-medium text-white transition enabled:hover:bg-ink-800 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {status === "submitting" ? "Sending…" : "Send feedback"}
        </button>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}

      {rating !== null && rating >= HAPPY_THRESHOLD && status === "idle" && (
        <p className="mt-4 text-xs text-ink-400">
          Thanks! We'll send you to Google to share that publicly.
        </p>
      )}
    </form>
  );
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    >
      <path d="M12 3.5l2.7 5.5 6 .9-4.4 4.3 1.1 6L12 17.4 6.6 20.2l1-6L3.3 9.9l6-.9L12 3.5z" />
    </svg>
  );
}
