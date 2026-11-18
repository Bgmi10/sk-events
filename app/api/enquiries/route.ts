import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const SERVICES = ["wedding", "video", "product", "other"];
const clean = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max) || null;

export async function POST(req: Request) {
  try {
    const b = await req.json();
    if (b.website) return NextResponse.json({ ok: true }); // honeypot: bots fill this hidden field

    const name = clean(b.name, 80);
    const phone = clean(b.phone, 20);
    if (!name || name.length < 2 || !phone || !/^[+\d\s-]{7,20}$/.test(phone)) {
      return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
    }

    await prisma.enquiry.create({
      data: {
        name,
        phone,
        service: SERVICES.includes(b.service) ? b.service : "other",
        date: clean(b.date, 20),
        place: clean(b.place, 120),
        message: clean(b.message, 800),
      },
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
  }
}
