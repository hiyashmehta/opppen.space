"use client";
import { NextUIProvider } from "@nextui-org/system";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            {" "}
            <SessionProvider>
                {" "}
                <Toaster className="dark:hidden" />
                <Toaster theme="dark" className="hidden dark:block" />
                {children}
            </SessionProvider>
        </NextUIProvider>
    );
}
