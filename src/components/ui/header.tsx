import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black">
              <span className="text-white font-semibold">TNB</span>
            </div>
            <span className="text-sm font-semibold">The New Black AI</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-zinc-900 border-b-2 border-zinc-900">
            Design
          </Link>
          <Link href="/virtual-try-on" className="text-sm font-medium text-zinc-500 hover:text-zinc-900">
            Virtual Try-On
          </Link>
          <Link href="/models" className="text-sm font-medium text-zinc-500 hover:text-zinc-900">
            Models
          </Link>
          <Link href="/branding" className="text-sm font-medium text-zinc-500 hover:text-zinc-900">
            Branding
          </Link>
          <Link href="/techpack" className="text-sm font-medium text-zinc-500 hover:text-zinc-900">
            Techpack
          </Link>
          <Link href="/trends" className="text-sm font-medium text-zinc-500 hover:text-zinc-900">
            Trends
          </Link>
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-zinc-500 hover:text-zinc-900">
              More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-chevron-down h-4 w-4">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/tutorials" className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-500 hover:text-zinc-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-video h-4 w-4">
              <path d="M22 8.5a2.5 2.5 0 0 0-3.5-2.3L18 6.5l-6 4-6-4-.5-.3A2.5 2.5 0 0 0 2 8.5v7a2.5 2.5 0 0 0 3.5 2.3L6 17.5l6-4 6 4 .5.3a2.5 2.5 0 0 0 3.5-2.3Z" />
            </svg>
            Tutos
          </Link>
          <Button variant="outline" className="hidden md:flex">
            Log in
          </Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </header>
  );
}
