"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const HoveredLink = ({ children, ...rest }: React.ComponentProps<typeof Link>) => {
  return (
    <Link {...rest} className="text-neutral-700 dark:text-neutral-200 hover:text-black">
      {children}
    </Link>
  );
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <p className="cursor-pointer text-black hover:opacity-90 dark:text-white">
        {item}
      </p>
      {active === item && (
        <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4">
          <div className="rounded-xl border bg-white p-4 shadow-xl dark:border-neutral-800 dark:bg-black">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex items-center gap-4 rounded-full border bg-white px-8 py-3 shadow-input dark:border-white/[0.2] dark:bg-black"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex gap-4">
      <div>
        <h4 className="text-base font-bold">{title}</h4>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
      </div>
    </Link>
  );
};
