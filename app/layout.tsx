import { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Learn Next.js</title>
      </head>
      <body className="flex flex-col min-h-screen px-4 py-4">
        <header>
          <nav>
            <ul className="flex gap-3">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="py-3 text-xs text-center border-t">
          <p>I'm here to stay (footer)</p>
        </footer>
      </body>
    </html>
  );
}
