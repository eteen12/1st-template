import Link from "next/link";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import Button from "../reusables/button";
import { DesktopNavLinks, MobileNavLinks } from "./navLinks";

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 justify-between">
          <div className="flex">
            <Link
              className="flex flex-shrink-0 items-center shrinkAnimation cursor-pointer"
              href="/"
              aria-label="go to homepage"
            >
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <DesktopNavLinks />

          <div className="hidden md:ml-6 md:flex md:items-center ">
            <Button />
          </div>
          <div className="-mr-2 flex items-center md:hidden  ">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 ">
              <span className="absolute -inset-0.5  z-0" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-8 w-8 group-data-[open]:hidden transition-all ease-in-out z-50"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-8 w-8 group-data-[open]:block z-50"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden ">
        <MobileNavLinks />
      </DisclosurePanel>
    </Disclosure>
  );
}
