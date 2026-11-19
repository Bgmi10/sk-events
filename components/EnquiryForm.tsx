"use client";
import { useState } from "react";
import { content, type Lang } from "@/lib/content";

const field =
  "w-full rounded-xl border border-gray-700 bg-dark-900 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-gold-500 [color-scheme:dark]";
const label = "grid gap-2 text-xs uppercase tracking-wider text-gray-400";

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
        // the form field "emirate" is saved in the existing "place" column
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
    <form onSubmit={onSubmit} className="space-y-5">
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>{f.name}
          <input name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder={f.namePh} className={field} />
        </label>
        <label className={label}>{f.phone}
          <input name="phone" required type="tel" inputMode="tel" autoComplete="tel" dir="ltr" placeholder="+971 50 000 0000" className={`${field} text-start`} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>{f.service}
          <select name="service" defaultValue="wedding" className={field}>
            {f.services.map((s) => (<option key={s.value} value={s.value}>{s.label}</option>))}
          </select>
        </label>
        <label className={label}>{f.emirate}
          <select name="place" defaultValue="Dubai" className={field}>
            {f.emirates.map((s) => (<option key={s.value} value={s.value}>{s.label}</option>))}
          </select>
        </label>
      </div>

      <label className={label}>{f.date}
        <input name="date" type="date" className={field} />
      </label>

      <label className={label}>{f.message}
        <textarea name="message" rows={4} maxLength={800} placeholder={f.messagePh} className={field} />
      </label>

      <button type="submit" disabled={status === "sending"} className="gold-gradient w-full rounded-xl py-4 text-sm font-bold uppercase tracking-wider text-black shadow-lg shadow-gold-500/20 transition hover:opacity-95 disabled:opacity-60">
        {status === "sending" ? f.sending : f.submit}
      </button>

      <p aria-live="polite" className="min-h-6 text-sm text-gold-400">
        {status === "done" && f.done}
        {status === "error" && f.error}
      </p>
    </form>
  );
}
