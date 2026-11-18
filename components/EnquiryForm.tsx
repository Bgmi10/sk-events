"use client";
import { useState } from "react";
import { content, type Lang } from "@/lib/content";

const field =
  "w-full rounded-sm border border-ink/25 bg-white px-4 py-3 text-base text-ink outline-none focus:border-red focus:ring-0";

export default function EnquiryForm({ lang }: { lang: Lang }) {
  const f = content[lang].contact;
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error("bad response");
      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 outline-none">
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <label className="grid gap-1.5 text-sm">{f.name}
        <input name="name" required minLength={2} maxLength={80} autoComplete="name" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm">{f.phone}
        <input name="phone" required type="tel" inputMode="tel" autoComplete="tel" dir="ltr" className={`${field} text-start`} />
      </label>
      <label className="grid gap-1.5 text-sm">{f.service}
        <select name="service" defaultValue="wedding" className={field}>
          {f.services.map((s) => (<option key={s.value} value={s.value}>{s.label}</option>))}
        </select>
      </label>
      <div className="grid grid-cols-2 gap-4">
        <label className="grid gap-1.5 text-sm">{f.date}
          <input name="date" type="date" className={field} />
        </label>
        <label className="grid gap-1.5 text-sm">{f.place}
          <input name="place" maxLength={120} className={field} />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm">{f.message}
        <textarea name="message" rows={3} maxLength={800} className={field} />
      </label>
      <button type="submit" disabled={status === "sending"} className="rounded-sm bg-red px-7 py-3.5 font-medium text-white transition hover:bg-redDeep disabled:opacity-60">
        {status === "sending" ? f.sending : f.submit}
      </button>
      <p aria-live="polite" className="min-h-6 text-sm">
        {status === "done" && f.done}
        {status === "error" && f.error}
      </p>
    </form>
  );
}