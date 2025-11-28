import { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/app/components/navbar";

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
          <Navbar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="py-3 text-xs text-center border-t">
          <p>I'm here to stay (footer)</p>
        </footer>
      </body>
    </html>
  );
}
