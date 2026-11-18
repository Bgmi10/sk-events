"use client";
import Image from "next/image";
import { useState } from "react";
import EnquiryForm from "@/components/EnquiryForm";
import Gallery from "@/components/Gallery";
import {
  ABOUT_IMAGE,
  CLIENT_LOGOS,
  content,
  EMAIL,
  EVENT_IMAGES,
  IG_URL,
  PHONE_DISPLAY,
  SERVICE_IMAGES,
  waLink,
  type Lang,
} from "@/lib/content";

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
          <nav className="hidden gap-6 text-sm font-medium uppercase tracking-wider md:flex lg:gap-8">
            <a href="#about" className="hover:text-red">{t.nav.about}</a>
            <a href="#services" className="hover:text-red">{t.nav.services}</a>
            <a href="#events" className="hover:text-red">{t.nav.events}</a>
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
        {t.band.join("  •  ")}
      </div>

      {/* About: photo + copy + five points */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink">
            <Image src={ABOUT_IMAGE} alt="" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
            <span className="absolute start-0 top-0 h-full w-1.5 bg-red" />
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-6xl">{t.about.title}</h2>
            <div className="mt-4 h-1 w-20 bg-red" />
            <p className="mt-8 max-w-xl text-lg leading-relaxed">{t.about.p1}</p>
            <p className="mt-4 max-w-xl leading-relaxed text-stone">{t.about.p2}</p>
            <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {t.about.points.map(([head, body]) => (
                <div key={head} className="border-t-2 border-ink pt-3">
                  <dt className="font-display text-2xl">{head}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-stone">{body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Services: eight numbered cards */}
      <section id="services" className="bg-pearl py-24">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="font-display text-4xl md:text-6xl">{t.services.title}</h2>
          <div className="mt-4 h-1 w-20 bg-red" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.items.map((s, n) => (
              <li key={s.title} className="group border border-ink/15 bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
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
        </div>
      </section>

      {/* Events: ten cards with a photo each */}
      <section id="events" className="mx-auto max-w-7xl px-5 py-24">
        <h2 className="font-display text-4xl md:text-6xl">{t.events.title}</h2>
        <div className="mt-4 h-1 w-20 bg-red" />
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone">{t.events.intro}</p>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {t.events.items.map((e, n) => (
            <li key={e.title} className="grid border border-ink/15 bg-white md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative aspect-[16/10] bg-ink md:aspect-auto md:min-h-[240px]">
                <Image src={EVENT_IMAGES[n]} alt="" fill sizes="(min-width: 768px) 22vw, 100vw" className="object-cover" />
              </div>
              <div className="border-t-4 border-red p-5 md:border-s-4 md:border-t-0">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-redDeep">{e.meta}</p>
                <h3 className="mt-2 font-display text-2xl leading-tight">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{e.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Clients: black section, logo tiles (text tile where no logo was supplied) */}
      <section id="clients" className="bg-ink py-24 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="font-display text-4xl md:text-6xl">{t.clients.title}</h2>
          <div className="mt-4 h-1 w-20 bg-red" />
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {t.clients.names.map((name, n) => {
              const logo = CLIENT_LOGOS[n];
              return (
                <li key={name} className="flex aspect-[3/2] items-center justify-center border border-white/15 bg-black p-3">
                  {logo ? (
                    <div className="relative h-full w-full">
                      <Image src={logo} alt={name} fill sizes="(min-width: 1024px) 18vw, 45vw" className="object-contain" />
                    </div>
                  ) : (
                    <span className="text-center text-sm font-semibold uppercase tracking-wider text-white/80">{name}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="work" className="bg-pearl py-24">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="font-display text-4xl md:text-6xl">{t.work.title}</h2>
          <div className="mb-12 mt-4 h-1 w-20 bg-red" />
          <Gallery labels={t.work} />
        </div>
      </section>

      {/* Partner: who we work with */}
      <section id="partner" className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-display text-4xl md:text-6xl">{t.partner.title}</h2>
            <div className="mt-4 h-1 w-20 bg-red" />
            <p className="mt-8 max-w-md text-lg leading-relaxed text-stone">{t.partner.text}</p>
            <p className="mt-6 max-w-md leading-relaxed">{t.partner.close}</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {t.partner.list.map((item) => (
              <li key={item} className="flex items-start gap-3 border border-ink/15 bg-white p-5">
                <span aria-hidden className="mt-1.5 h-3 w-3 shrink-0 bg-red" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
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