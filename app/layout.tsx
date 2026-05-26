import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoFounderConnect — Find Your Co-Founder, Build What Matters",
  description:
    "AI-powered co-founder matching for serious builders. Get matched with technically compatible, vision-aligned co-founders in days, not months.",
  keywords:
    "co-founder matching, find co-founder, startup co-founder, entrepreneur matching, startup partner",
  openGraph: {
    title: "CoFounderConnect — Find Your Co-Founder, Build What Matters",
    description:
      "AI-powered co-founder matching for serious builders. Get matched with technically compatible, vision-aligned co-founders in days, not months.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-white antialiased">{children}</body>
    </html>
  );
}
