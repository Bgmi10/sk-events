import type { Metadata } from "next";
import "@fontsource/instrument-serif";
import "@fontsource-variable/albert-sans";
import "@fontsource-variable/noto-naskh-arabic";
import "./globals.css";

export const metadata: Metadata = {
  title: "SK Events | Event planning, photography and film, UAE",
  description:
    "SK Events plans, films and photographs weddings, concerts, corporate galas and fashion shows across the UAE.",
  robots: { index: false }, // sample site: remove when the client approves it
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}