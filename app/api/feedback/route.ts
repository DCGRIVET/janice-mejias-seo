import { NextResponse } from "next/server";
import { HAPPY_THRESHOLD } from "@/lib/constants";

export async function POST(request: Request) {
  console.log("[api/feedback] start");

  try {
    const body = await request.json();
    const rating = Number(body?.rating);
    const feedback = typeof body?.feedback === "string" ? body.feedback.trim() : "";

    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      return NextResponse.json({ ok: false, error: "Invalid rating" }, { status: 400 });
    }

    const isHappy = rating >= HAPPY_THRESHOLD;

    if (!isHappy) {
      await sendSlackAlert({ rating, feedback });
    }

    console.log("[api/feedback] end", { rating, isHappy });
    return NextResponse.json({ ok: true, isHappy });
  } catch (error) {
    console.error("[api/feedback] error", error);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

async function sendSlackAlert(payload: { rating: number; feedback: string }) {
  const webhook = process.env.SLACK_WEBHOOK_URL;

  if (!webhook) {
    console.warn(
      "[api/feedback] SLACK_WEBHOOK_URL not set — skipping webhook send. Payload:",
      payload,
    );
    return;
  }

  const summary = `New low-score feedback — ${payload.rating}/5`;

  const body = {
    text: `*${summary}*\n${payload.feedback ? `> ${payload.feedback}` : "_(no written feedback)_"}`,
    rating: payload.rating,
    feedback: payload.feedback,
    summary,
    submittedAt: new Date().toISOString(),
  };

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    console.error("[api/feedback] webhook failed", res.status, await res.text());
  } else {
    console.log("[api/feedback] webhook sent OK");
  }
}
