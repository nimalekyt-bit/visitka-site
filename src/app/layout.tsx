import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "woodskilla | Никита — Fullstack Developer",
  description:
    "Разработка production-систем с нуля: Next.js, FastAPI, PostgreSQL, Redis, Docker, DevOps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
