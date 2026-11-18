"use client";
import Image from "next/image";
import { useState } from "react";
import EnquiryForm from "@/components/EnquiryForm";
import Gallery from "@/components/Gallery";
import { content, EMAIL, IG_URL, PHONE_DISPLAY, SERVICE_IMAGES, waLink, type Lang } from "@/lib/content";

export default function Site() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} lang={lang} id="top">
      {/* Header: black bar, logo on a white tile */}
      <header className="sticky top-0 z-20 bg-ink text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5">
          <a href="#top" aria-label={t.brand} className="flex items-center gap-3">
            <Image src="/images/sk-logo.jpg" alt="" width={200} height={200} priority className="h-12 w-12 bg-white object-contain" />
            <span className="hidden text-sm font-semibold uppercase tracking-[0.2em] sm:block">{t.brand}</span>
          </a>
          <nav className="hidden gap-8 text-sm font-medium uppercase tracking-wider md:flex">
            <a href="#services" className="hover:text-red">{t.nav.services}</a>
            <a href="#work" className="hover:text-red">{t.nav.work}</a>
            <a href="#contact" className="hover:text-red">{t.nav.contact}</a>
          </nav>
          <div role="group" aria-label="Language" className="flex border border-white/40 text-sm">
            {(["en", "ar"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`px-3.5 py-1.5 font-medium transition ${lang === l ? "bg-red text-white" : "text-white hover:bg-white/10"}`}
              >
                {l === "en" ? "EN" : "عربي"}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero: full-width split, black text panel + one large photo */}
      <section className="grid bg-ink text-white md:min-h-[78vh] md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-14 md:px-14 md:py-20 lg:px-20">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-red">{t.tag}</p>
          <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">{t.hero.title}</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/75">{t.hero.sub}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={waLink(t.hero.waText)} className="bg-red px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-ink">
              {t.hero.cta}
            </a>
            <a href="#work" className="border border-white/50 px-8 py-4 font-semibold transition hover:border-white hover:bg-white hover:text-ink">
              {t.hero.secondary}
            </a>
          </div>
        </div>
        <div className="relative order-first min-h-[360px] md:order-none">
          <Image src="/images/sk-11.jpg" alt="Groom in a black and gold bisht seated beneath a chandelier" fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>

      {/* Red band */}
      <div className="bg-red px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white">
        {t.services.items.map((s) => s.title).join("  •  ")}
      </div>

      {/* Services: four numbered cards */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-24">
        <h2 className="font-display text-4xl md:text-6xl">{t.services.title}</h2>
        <div className="mt-4 h-1 w-20 bg-red" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((s, n) => (
            <li key={s.title} className="group border border-ink/15 bg-white">
              <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                <Image src={SERVICE_IMAGES[n]} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                <span className="absolute start-0 top-0 bg-red px-3 py-2 text-sm font-bold text-white">0{n + 1}</span>
              </div>
              <div className="border-t-4 border-ink p-5">
                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{s.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="work" className="bg-pearl py-24">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="font-display text-4xl md:text-6xl">{t.work.title}</h2>
          <div className="mb-12 mt-4 h-1 w-20 bg-red" />
          <Gallery labels={t.work} />
        </div>
      </section>

      {/* Contact: black section, form on a white card */}
      <section id="contact" className="bg-ink py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-display text-4xl md:text-6xl">{t.contact.title}</h2>
            <div className="mt-4 h-1 w-20 bg-red" />
            <p className="mt-8 max-w-sm text-lg leading-relaxed text-white/75">{t.contact.intro}</p>
            <dl className="mt-10 grid gap-3 text-white/90">
              <dd><a href={waLink(t.hero.waText)} dir="ltr" className="hover:text-red">{PHONE_DISPLAY}</a></dd>
              <dd><a href={`mailto:${EMAIL}`} className="hover:text-red">{EMAIL}</a></dd>
              <dd><a href={IG_URL} className="hover:text-red">@skevents1</a></dd>
              <dd className="text-white/60">{t.contact.areas}</dd>
            </dl>
          </div>
          <div className="border-t-4 border-red bg-white p-6 text-ink md:p-8">
            <EnquiryForm lang={lang} />
          </div>
        </div>
      </section>

      <footer className="bg-red px-5 py-6 text-center text-sm font-medium text-white">{t.brand}, {t.tag}</footer>
    </div>
  );
}