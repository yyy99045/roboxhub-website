"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Hardware", href: "/hardware" },
  { label: "Docs", href: "https://wiki.roboxhub.ai" },
  { label: "Demos", href: "https://wiki.roboxhub.ai/demo-guides" },
  { label: "Learn", href: "/learn" },
  { label: "Solutions", href: "/solutions" },
  { label: "Community", href: "https://forum.roboxhub.ai" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-gray-900">
            <span className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center text-white text-xs font-bold">R</span>
            RoboxHub
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) =>
              item.href.startsWith("http") ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    pathname === item.href
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link href="/rfq" className="ml-3 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              RFQ
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-gray-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                  <line x1="6" y1="18" x2="18" y2="6"/>
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6"/>
                  <line x1="4" y1="12" x2="20" y2="12"/>
                  <line x1="4" y1="18" x2="20" y2="18"/>
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {NAV_ITEMS.map((item) =>
              item.href.startsWith("http") ? (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md">
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md">
                  {item.label}
                </Link>
              )
            )}
            <Link href="/rfq" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-white bg-blue-600 rounded-md text-center">
              RFQ
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
