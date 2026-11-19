"use client";
import Image from "next/image";
import { useState } from "react";
import EnquiryForm from "@/components/EnquiryForm";
import Gallery from "@/components/Gallery";
import {
  ABOUT_IMAGES, CLIENTS, content, EMAIL, EVENT_IMAGES, HERO_IMAGE, IG_URL,
  PHONE_DISPLAY, SERVICE_ICONS, waLink, type Lang,
} from "@/lib/content";

type IconName = (typeof SERVICE_ICONS)[number] | "instagram" | "crown" | "menu" | "check";

function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  const paths: Record<IconName, React.ReactNode> = {
    gem: <><path d="M6 3h12l4 6-10 12L2 9z" /><path d="M2 9h20M12 21 8 9l4-6 4 6z" /></>,
    camera: <><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></>,
    building: <><path d="M5 21V4h9v17M14 9h5v12M3 21h18M8 8h3M8 12h3M8 16h3" /></>,
    star: <path d="M12 3l2.4 5.6L20 9.3l-4.4 3.9L17 19l-5-3-5 3 1.4-5.8L4 9.3l5.6-.7z" />,
    film: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M7 5v14M17 5v14M3 9h4M3 15h4M17 9h4M17 15h4" /></>,
    screen: <><rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M8 20h8M12 16v4" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" /></>,
    crown: <path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5z" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    check: <path d="M5 12l5 5 9-10" />,
  };
  return <svg aria-hidden viewBox="0 0 24 24" className={className} {...p}>{paths[name]}</svg>;
}

function Kicker({ children }: { children: React.ReactNode }) {
  return <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">{children}</span>;
}

export default function Site() {
  const [lang, setLang] = useState<Lang>("en");
  const [menu, setMenu] = useState(false);
  const t = content[lang];
  const links = [
    ["home", "#home"], ["about", "#about"], ["services", "#services"],
    ["portfolio", "#portfolio"], ["clients", "#clients"], ["leadership", "#leadership"], ["contact", "#contact"],
  ] as const;

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
      {/* NAVIGATION */}
      <header className=" fixed top-0 z-50 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            <a href="#home" className="flex items-center gap-3">
              <Image src="/images/sk-logo.jpg" alt="" width={200} height={200} priority className="h-11 w-11 rounded-full border-2 border-gold-500 bg-white object-contain" />
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-white">SK <span className="text-gold-500">EVENTS</span></span>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400">{t.brandSub}</p>
              </div>
            </a>

            <nav className="hidden gap-x-7 text-sm font-medium tracking-wide xl:flex">
              {links.map(([k, href], n) => (
                <a key={k} href={href} className={`transition hover:text-gold-400 ${n === 0 ? "text-gold-500" : "text-gray-300"}`}>{t.nav[k]}</a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div role="group" aria-label="Language" className="flex overflow-hidden rounded-full border border-gold-500/40 text-xs">
                {(["en", "ar"] as Lang[]).map((l) => (
                  <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l}
                    className={`px-3 py-1.5 font-semibold transition ${lang === l ? "gold-gradient text-black" : "text-gray-300 hover:text-gold-400"}`}>
                    {l === "en" ? "EN" : "عربي"}
                  </button>
                ))}
              </div>
              <a href={IG_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="hidden text-gray-400 transition hover:text-gold-500 md:block"><Icon name="instagram" /></a>
              <a href="#contact" className="gold-gradient hidden rounded-full px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-gold-500/20 transition hover:opacity-90 md:block">{t.cta}</a>
              <button onClick={() => setMenu((m) => !m)} aria-label="Menu" aria-expanded={menu} className="text-gray-300 hover:text-gold-500 xl:hidden"><Icon name="menu" className="h-7 w-7" /></button>
            </div>
          </div>
        </div>
        {menu && (
          <div className="space-y-3 border-b border-gray-800 bg-dark-800 px-6 py-4 xl:hidden">
            {links.map(([k, href], n) => (
              <a key={k} href={href} onClick={() => setMenu(false)} className={`block ${n === 0 ? "font-medium text-gold-500" : "text-gray-300 hover:text-gold-500"}`}>{t.nav[k]}</a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image src={HERO_IMAGE.src} alt={HERO_IMAGE.alt} fill priority sizes="100vw" className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/75 to-dark-900/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-400">
            <Icon name="crown" className="h-3 w-3" />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            {t.hero.title1}<br />
            <span className="gold-text-gradient italic">{t.hero.title2}</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-base font-light leading-relaxed text-gray-300 sm:text-lg">{t.hero.sub}</p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contact" className="gold-gradient w-full rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider text-black shadow-xl shadow-gold-500/20 transition hover:scale-105 sm:w-auto">{t.hero.plan}</a>
            <a href={IG_URL} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-600 bg-dark-800/50 px-8 py-4 text-sm uppercase tracking-wider text-white backdrop-blur-sm transition hover:border-gold-500 sm:w-auto">
              <Icon name="instagram" className="h-5 w-5 text-gold-500" />
              <span>{t.hero.explore}</span>
            </a>
          </div>

          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-6 border-t border-gray-800/80 pt-10 md:grid-cols-4">
            {t.hero.stats.map((s) => (
              <div key={s.label}>
                <h3 className="font-serif text-3xl font-bold text-gold-500 sm:text-4xl">{s.value}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-dark-800 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative pb-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-72 overflow-hidden rounded-2xl shadow-2xl">
                  <Image src={ABOUT_IMAGES[0].src} alt={ABOUT_IMAGES[0].alt} fill sizes="(min-width: 1024px) 22vw, 45vw" className="object-cover" />
                </div>
                <div className="relative mt-8 h-72 overflow-hidden rounded-2xl shadow-2xl">
                  <Image src={ABOUT_IMAGES[1].src} alt={ABOUT_IMAGES[1].alt} fill sizes="(min-width: 1024px) 22vw, 45vw" className="object-cover" />
                </div>
              </div>
              <div className="absolute bottom-0 start-1/2 -translate-x-1/2 rounded-xl border border-gold-500/40 bg-dark-900 px-6 py-4 text-center shadow-2xl rtl:translate-x-1/2">
                <p className="font-serif text-xl font-bold text-gold-500">{t.about.badgeTitle}</p>
                <p className="text-xs text-gray-400">{t.about.badgeSub}</p>
              </div>
            </div>

            <div>
              <Kicker>{t.about.kicker}</Kicker>
              <h2 className="mb-6 mt-3 font-serif text-3xl font-bold leading-tight text-white sm:text-5xl">{t.about.title}</h2>
              <p className="mb-6 leading-relaxed text-gray-300">
                {t.about.p1a}<strong className="text-white">{t.about.p1b}</strong>{t.about.p1c}<strong className="text-gold-400">{t.about.p1d}</strong>{t.about.p1e}
              </p>
              <p className="mb-6 leading-relaxed text-gray-400">
                {t.about.p2a}<strong className="text-white">{t.about.p2b}</strong>{t.about.p2c}<strong className="text-white">{t.about.p2d}</strong>{t.about.p2e}
              </p>
              <p className="leading-relaxed text-gray-400">{t.about.p3}</p>
            </div>
          </div>

          <div className="mt-24">
            <Kicker>{t.about.whyKicker}</Kicker>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {t.about.why.map((w, n) => (
                <li key={w.title} className="rounded-2xl border border-gray-800 bg-dark-900 p-6 transition hover:border-gold-500/50">
                  <span className="font-serif text-3xl font-bold text-gold-500">0{n + 1}</span>
                  <h3 className="mb-2 mt-3 font-serif text-lg font-bold text-white">{w.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{w.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-dark-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Kicker>{t.services.kicker}</Kicker>
            <h2 className="mb-4 mt-3 font-serif text-3xl font-bold text-white sm:text-5xl">{t.services.title}</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((s, n) => (
              <div key={s.title} className="group rounded-2xl border border-gray-800 bg-dark-800 p-8 transition hover:border-gold-500/50">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500"><Icon name={SERVICE_ICONS[n]} className="h-7 w-7" /></div>
                <h3 className="mb-3 font-serif text-2xl font-bold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="bg-dark-800 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <Kicker>{t.portfolio.kicker}</Kicker>
              <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-5xl">{t.portfolio.title}</h2>
            </div>
            <a href={IG_URL} target="_blank" rel="noreferrer" className="text-sm font-medium text-gold-400 hover:underline">{t.portfolio.follow}</a>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.portfolio.items.map((e, n) => (
              <div key={e.title} className="group relative h-80 overflow-hidden rounded-2xl">
                <Image src={EVENT_IMAGES[n]} alt={e.title} fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6">
                  <div>
                    <span className="text-xs uppercase text-gold-400">{e.cat}</span>
                    <h4 className="font-serif text-xl font-bold text-white">{e.title}</h4>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-300">{e.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24">
            <Kicker>{t.work.kicker}</Kicker>
            <h3 className="mb-10 mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">{t.work.title}</h3>
            <Gallery labels={t.work} />
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="bg-dark-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Kicker>{t.clients.kicker}</Kicker>
            <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-5xl">{t.clients.title}</h2>
          </div>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {CLIENTS.map((c) => (
              <li key={c.file} style={{ backgroundColor: c.bg }} className="flex h-28 items-center justify-center rounded-xl border border-gray-800 p-4 md:h-32">
                <Image src={`/images/clients/${c.file}.png`} alt={c.name} width={c.w} height={c.h} className="max-h-full w-auto object-contain" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COLLABORATE */}
      <section className="border-y border-gold-500/20 bg-dark-800 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Kicker>{t.collab.kicker}</Kicker>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">{t.collab.title}</h2>
          <p className="mt-4 max-w-xl text-gray-400">{t.collab.intro}</p>
          <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.collab.items.map((i) => (
              <li key={i} className="flex items-start gap-3 border-t border-gray-700 pt-4 text-gray-200">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* LEADERSHIP + CONTACT */}
      <section id="leadership" className="bg-dark-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Kicker>{t.leadership.kicker}</Kicker>
            <h2 className="mb-4 mt-3 font-serif text-3xl font-bold text-white sm:text-5xl">{t.leadership.title}</h2>
          </div>

          <div className="mx-auto mb-20 grid max-w-4xl gap-8 md:grid-cols-2">
            {t.leadership.people.map((p) => (
              <div key={p.name} className="rounded-2xl border border-gold-500/30 bg-dark-800 p-8 text-center shadow-xl">
                <div className="gold-gradient mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full font-serif text-2xl font-bold text-black" dir="ltr">{p.initials}</div>
                <span className="mb-2 inline-block rounded-full bg-gold-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-400">{p.role}</span>
                <h3 className="mb-2 font-serif text-2xl font-bold text-white">{p.name}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{p.text}</p>
              </div>
            ))}
          </div>

          <div id="contact" className="rounded-3xl border border-gray-800 bg-dark-800 p-8 shadow-2xl sm:p-12">
            <div className="grid gap-12 lg:grid-cols-5">
              <div className="space-y-6 lg:col-span-2">
                <div>
                  <Kicker>{t.contact.kicker}</Kicker>
                  <h3 className="mt-2 font-serif text-3xl font-bold text-white">{t.contact.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{t.contact.intro}</p>
                </div>
                <div className="space-y-4 border-t border-gray-700/60 pt-4">
                  <div><p className="text-xs uppercase text-gray-400">{t.contact.labels.ceo}</p><p className="font-semibold text-white">{t.leadership.people[0].name}</p></div>
                  <div><p className="text-xs uppercase text-gray-400">{t.contact.labels.md}</p><p className="font-semibold text-white">{t.leadership.people[1].name}</p></div>
                  <div><p className="text-xs uppercase text-gray-400">{t.contact.labels.hq}</p><p className="font-semibold text-white">{t.contact.hq}</p></div>
                  <div><p className="text-xs uppercase text-gray-400">{t.contact.labels.phone}</p><a href={waLink(t.hero.waText)} dir="ltr" className="font-semibold text-gold-400 hover:underline">{PHONE_DISPLAY}</a></div>
                  <div><p className="text-xs uppercase text-gray-400">{t.contact.labels.email}</p><a href={`mailto:${EMAIL}`} className="break-all font-semibold text-gold-400 hover:underline">{EMAIL}</a></div>
                  <div><p className="text-xs uppercase text-gray-400">{t.contact.labels.ig}</p><a href={IG_URL} target="_blank" rel="noreferrer" className="font-semibold text-gold-400 hover:underline">instagram.com/skevents1</a></div>
                </div>
                <a href={waLink(t.hero.waText)} className="inline-block rounded-full border border-gold-500/60 px-6 py-3 text-sm font-semibold text-gold-400 transition hover:bg-gold-500 hover:text-black">{t.contact.whatsapp}</a>
              </div>
              <div className="lg:col-span-3"><EnquiryForm lang={lang} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-900 bg-black py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
          <div>
            <span className="font-serif text-xl font-bold text-white">SK <span className="text-gold-500">EVENTS</span></span>
            <p className="mt-1 text-xs text-gray-500">{t.footer.line}</p>
          </div>
          <div className="text-center text-xs text-gray-500">
            {t.footer.ceo}: <span className="text-gray-300">{t.leadership.people[0].name}</span> | {t.footer.md}: <span className="text-gray-300">{t.leadership.people[1].name}</span>
          </div>
          <a href={IG_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-800 text-gray-400 transition hover:bg-gold-500 hover:text-black"><Icon name="instagram" className="h-5 w-5" /></a>
        </div>
      </footer>
    </div>
  );
}
