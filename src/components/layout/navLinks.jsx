// NavLinks.js
"use client";
import Link from "next/link";
import { Disclosure } from "@headlessui/react"; // Assuming you're using Headless UI for mobile dropdown
import { usePathname } from "next/navigation";

const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/services", text: "Services" },
  { href: "/contact", text: "Contact" },
];

export function DesktopNavLinks() {
  const pathname = usePathname();

  return (
    <div className="hidden md:ml-6 md:flex md:space-x-8 md:items-center md:text-center">
      {links.map((link) => (
        <Link
          key={link.href}
          aria-label={`go to the ${link.text} page`}
          href={link.href}
          className={`nav-linkD text-black ${
            pathname === link.href ? "active-link" : "inactive-linkD"
          }`}
        >
          <p>{link.text}</p>
        </Link>
      ))}
    </div>
  );
}

export function MobileNavLinks() {
  const pathname = usePathname();
  return (
    <div className="md:hidden space-y-1 pb-3 pt-2">
      {links.map((link) => (
        <Disclosure.Button
          key={link.href}
          as="a"
          href={link.href}
          //   className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
          className={`nav-linkM text-lg ${
            pathname === link.href
              ? "active-linkM text-black"
              : "inactive-linkM"
          }`}
        >
          {link.text}
        </Disclosure.Button>
      ))}
    </div>
  );
}

export default function NavLinks() {
  return (
    <>
      <DesktopNavLinks />
      <MobileNavLinks />
    </>
  );
}
