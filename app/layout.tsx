import type { Metadata } from "next";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/500-italic.css";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/noto-naskh-arabic";
import "./globals.css";

export const metadata: Metadata = {
  title: "SK EVENTS UAE | Luxury Event Planning & Photography Since 2012",
  description:
    "SK Events is an event management and luxury photography company in the UAE since 2012, with weddings, corporate events, concerts and video production.",
  robots: { index: false }, // sample site: remove when the client approves it
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-dark-900 font-sans text-gray-200 antialiased">{children}</body>
    </html>
  );
}
