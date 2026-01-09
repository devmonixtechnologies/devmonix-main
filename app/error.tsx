'use client';

import { Footer, Navbar } from '@/components';
import { Button } from "@/components/ui/button";
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="relative flex flex-col items-center justify-center px-4">
            <Navbar />

            <div className="flex flex-col items-center justify-center mx-auto h-screen">
                <div className="flex items-center justify-center h-full flex-col">
                    <span className="text-sm font-medium px-3.5 py-1 rounded-md bg-gradient-to-br from-red-400 to-red-600 text-neutral-50">
                        Error
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold text-neutral-50 mt-5">
                        Something went wrong!
                    </h1>
                    <p className="text-base text-neutral-400 font-medium mt-5 text-center mx-auto max-w-xl">
                        An unexpected error occurred. We&apos;ve been notified and are working to fix it.
                    </p>
                    <Button
                        onClick={reset}
                        className="mt-8"
                    >
                        Try again
                    </Button>
                </div>
            </div>

            <Footer />
        </main>
    );
}