"use client";
import Image from "next/image";
import { useState } from "react";
import EnquiryForm from "@/components/EnquiryForm";
import Gallery from "@/components/Gallery";
import { content, EMAIL, HERO, IG_URL, PHONE_DISPLAY, SERVICE_IMAGES, waLink, type Lang } from "@/lib/content";

export default function Site() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} lang={lang} id="top">
      <header className="sticky top-0 z-20 border-b border-gold/30 bg-paper/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="font-display text-2xl">{t.brand}</a>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#services">{t.nav.services}</a>
            <a href="#work">{t.nav.work}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <div role="group" aria-label="Language" className="flex gap-1 rounded-full border border-gold/60 bg-white/80 p-1 text-sm shadow-sm backdrop-blur-md">
            {(["en", "ar"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-3.5 py-1.5 font-medium transition ${lang === l ? "bg-gold text-ink" : "text-ink hover:bg-pearl"}`}
              >
                {l === "en" ? "EN" : "عربي"}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero: headline, then three arches (the stage photo's arches, repeated as frames) */}
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-12 md:pt-20">
        <h1 className="max-w-4xl font-display text-5xl leading-[1.08] md:text-7xl">{t.hero.title}</h1>
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-lg leading-relaxed text-stone">{t.hero.sub}</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href={waLink(t.hero.waText)} className="rounded-sm bg-gold px-7 py-3.5 text-ink transition">
              {t.hero.cta}
            </a>
            <a href="#work" className="underline underline-offset-4">{t.hero.secondary}</a>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-3 items-end gap-3 md:gap-6">
          {HERO.map((h, n) => (
            <div key={h.src} style={{ "--i": n } as React.CSSProperties} className={`rise relative overflow-hidden rounded-t-full ring-1 ring-ink/10 ${h.ratio}`}>
              <Image src={h.src} alt={h.alt} fill priority sizes="(min-width: 1152px) 360px, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-5 pb-24">
        <h2 className="font-display text-4xl md:text-5xl">{t.services.title}</h2>
        <ul className="mt-12 divide-y divide-gold/25 border-y border-gold/25">
          {t.services.items.map((s, n) => (
            <li key={s.title} className="flex items-center justify-between gap-6 py-8">
              <div>
                <h3 className="font-display text-3xl md:text-4xl">{s.title}</h3>
                <p className="mt-2 max-w-md text-stone">{s.text}</p>
              </div>
              <div className="relative hidden h-28 w-24 shrink-0 overflow-hidden rounded-t-full ring-1 ring-ink/10 md:block">
                <Image src={SERVICE_IMAGES[n]} alt="" fill sizes="96px" className="object-cover" />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-5 pb-24">
        <h2 className="mb-12 font-display text-4xl md:text-5xl">{t.work.title}</h2>
        <Gallery labels={t.work} />
      </section>

      <section id="contact" className="bg-pearl py-24 text-ink">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">{t.contact.title}</h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-stone">{t.contact.intro}</p>
            <dl className="mt-10 grid gap-2 text-ink/80">
              <dd><a href={waLink(t.hero.waText)} dir="ltr" className="underline underline-offset-4">{PHONE_DISPLAY}</a></dd>
              <dd><a href={`mailto:${EMAIL}`} className="underline underline-offset-4">{EMAIL}</a></dd>
              <dd><a href={IG_URL} className="underline underline-offset-4">@skevents1</a></dd>
              <dd>{t.contact.areas}</dd>
            </dl>
          </div>
          <EnquiryForm lang={lang} />
        </div>
      </section>

      <footer className="px-5 py-8 text-center text-sm text-stone">{t.brand}, {t.tag}</footer>
    </div>
  );
}