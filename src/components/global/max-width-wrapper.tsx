import { cn } from "@/utils";
import React from 'react';

interface Props {
    className?: string;
    children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: Props) => {
    return (
        <section className={cn(
            "h-full mx-auto w-full max-w-full px-4 sm:px-6 md:max-w-screen-xl md:px-8 lg:px-12 xl:px-16",
            className,
        )}>
            {children}
        </section>
    )
};

export default MaxWidthWrapper