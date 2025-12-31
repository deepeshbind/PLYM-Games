import React from "react";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { AuroraText } from "./ui/aurora-text";

const footerLinks = [
  {
    id: 1,
    title: "About",
    url: "#",
  },
  {
    id: 2,
    title: "Contact",
    url: "#",
  },
  {
    id: 3,
    title: "Blog",
    url: "#",
  },
  {
    id: 4,
    title: "Story",
    url: "#",
  },
  {
    id: 5,
    title: "Company",
    url: "#",
  },
  {
    id: 6,
    title: "Product",
    url: "#",
  },
  {
    id: 7,
    title: "Press",
    url: "#",
  },
  {
    id: 8,
    title: "More",
    url: "#",
  },
  // You can add more links here
];

export default function Footer() {
  return (
    <footer className="px-4 py-4 lg:py-12">
      <div className="mx-auto flex max-w-7xl  md:p-10  flex-col gap-x-5 gap-y-10 sm:flex-row md:items-center justify-between lg:px-4">
        <div className="left-footer-part flex w-full flex-col gap-y-3.5 items-start justify-start pt-3 md:w-1/2 lg:w-1/3">
          
            <div className="header-logo flex items-center space-x-2">
              <p className="text-2xl font-bold font-mono">PLYM Games</p>
            </div>
          <p className="max-w-xs dark:text-neutral-400/80 text-neutral-500/80 dark:font-normal font-medium text-[15px]">
            PLYM Games is building a connected layer for gaming cafés and players: real-time bookings, live sessions, passes, rankings and more — all in one beautiful dashboard.
          </p>
          <div>
            <Button variant="accent" className="font-bold px-8 py-3">
            Coming Soon..
          </Button>
          </div>
        </div>

        <div className="right-footer-part w-1/2 lg:w-1/3">
          <div className="flex items-center sm:justify-end gap-x-16 px-0 lg:px-10">
            <ul className="footer-link-list grid grid-cols-2 gap-x-10 gap-y-3.5 font-medium text-neutral-500">
              {footerLinks.map((link) => (
                <li className="footer-link-item" key={link.id}>
                  <a
                    className="text-[15px] hover:text-neutral-800 dark:hover:text-white font-medium hover:underline hover:underline-offset-4 active:underline active:underline-offset-4"
                    href={link.url}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
       <div className="">
        <p className="text-center text-foreground/70 text-sm font-light">
          @PLYM Games 2026. All rights reserved
        </p>
       </div>
    </footer>
  );
}