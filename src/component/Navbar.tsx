"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div>
            className={cn("fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl", className)}
            Navbar
            <Menu setActive={setActive}>
                <Link href="#">
                    <MenuItem setActive={setActive} active={active}
                        item="Home">

                    </MenuItem>
                    <HoveredLink href="/courses">All the coursess
                        <div className="flex flex-col space-y-4 text-sm"> </div>
                    </HoveredLink>
                    <MenuItem setActive={setActive} active={active}
                        item="About">
                        <HoveredLink href="/courses">Music class
                            <div className="flex flex-col space-y-4 text-sm"> </div>
                        </HoveredLink>
                        <HoveredLink href="/courses">Advanced class
                            <div className="flex flex-col space-y-4 text-sm"> </div>
                        </HoveredLink>
                        <HoveredLink href="/courses">Basic Music class
                            <div className="flex flex-col space-y-4 text-sm"> </div>
                        </HoveredLink>

                    </MenuItem>
                </Link>
                <Link href="/contact">
                    <MenuItem setActive={setActive} active={active}
                        item="Me Contact">
                        <HoveredLink href="/email">email 
                        <div className="flex flex-col space-y-4 text-sm"> </div>
                        </HoveredLink>
                        <HoveredLink href="/contact">Contact 
                        <div className="flex flex-col space-y-4 text-sm"> </div>
                        </HoveredLink>

                    </MenuItem>
                    Contact</Link>
            </Menu>
        </div>
    )
}