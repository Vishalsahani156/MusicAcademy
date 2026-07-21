"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl", className)}>
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All the courses</HoveredLink>
            <HoveredLink href="/courses">Music class</HoveredLink>
            <HoveredLink href="/courses">Advanced class</HoveredLink>
            <HoveredLink href="/courses">Basic Music class</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">Music class</HoveredLink>
            <HoveredLink href="/courses">Advanced class</HoveredLink>
            <HoveredLink href="/courses">Basic Music class</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Contact Us</HoveredLink>
            <HoveredLink href="mailto:info@musicacademy.com">Email: info@musicacademy.com</HoveredLink>
            <HoveredLink href="tel:+1234567890">Phone: +1 (234) 567-890</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
