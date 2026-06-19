import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Owuor — Software Developer",
  description:
    "Backend engineer and Android developer with 10 years of experience building fintech, humanitarian, and social impact systems across East Africa.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "John Owuor — Software Developer",
    description:
      "Backend engineer and Android developer with 10 years of experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/syne.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/dm-sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
