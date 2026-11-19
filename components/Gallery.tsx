"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { GALLERY } from "@/lib/content";

type Labels = { close: string; prev: string; next: string; open: string };

export default function Gallery({ labels }: { labels: Labels }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [i, setI] = useState(0);
  const step = (d: number) => setI((x) => (x + d + GALLERY.length) % GALLERY.length);
  const open = (n: number) => { setI(n); dialog.current?.showModal(); };
  const btn = "rounded-full border border-gold-500/50 bg-dark-800 px-5 py-2 text-sm text-white hover:bg-gold-500 hover:text-black";

  return (
    <>
      <div className="columns-2 gap-4 md:columns-3 md:gap-6">
        {GALLERY.map((g, n) => (
          <button
            key={g.src}
            onClick={() => open(n)}
            aria-label={`${labels.open}: ${g.alt}`}
            className={`group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl md:mb-6 ${g.ratio}`}
          >
            <Image
              src={g.src}
              alt={g.alt}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-110"
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialog}
        onClick={(e) => { if (e.target === dialog.current) dialog.current?.close(); }}
        onKeyDown={(e) => { if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); }}
        className="m-auto max-h-[94vh] max-w-[94vw] bg-transparent p-0 backdrop:bg-black/90"
      >
        <div className="relative flex flex-col items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={GALLERY[i].src} alt={GALLERY[i].alt} className="max-h-[80vh] max-w-full rounded-xl object-contain" />
          <div className="flex gap-3">
            <button onClick={() => step(-1)} className={btn}>{labels.prev}</button>
            <button onClick={() => step(1)} className={btn}>{labels.next}</button>
            <button onClick={() => dialog.current?.close()} className={btn}>{labels.close}</button>
          </div>
        </div>
      </dialog>
    </>
  );
}
