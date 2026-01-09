"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import { cn, NAV_LINKS } from "@/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from 'react';

const MobileNavbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex lg:hidden items-center justify-end">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button size="icon" variant="ghost">
                        <Menu className="w-5 h-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-screen">
                    <SheetClose asChild className="absolute top-3 right-5 bg-background z-20 flex items-center justify-center">
                        <Button size="icon" variant="ghost" className="text-neutral-600">
                            <X className="w-5 h-5" />
                        </Button>
                    </SheetClose>
                    <div className="flex flex-col items-start w-full py-2 mt-10">
                        {/* Removed Sign In and Sign Up buttons */}
                        <ul className="flex flex-col items-start w-full mt-6">
                            {NAV_LINKS.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        onClick={handleClose}
                                        className="flex items-center w-full py-4 font-medium text-muted-foreground hover:text-foreground"
                                    >
                                        <span>{link.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
};

export default MobileNavbar
