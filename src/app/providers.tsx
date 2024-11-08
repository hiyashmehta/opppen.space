"use client";
import { NextUIProvider } from "@nextui-org/system";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import React from "react";
import { Toaster } from "sonner";
const queryClient = new QueryClient();
export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NuqsAdapter>
            <NextUIProvider>
                <SessionProvider>
                    <Toaster className="dark:hidden" />
                    <Toaster theme="dark" className="hidden dark:block" />{" "}
                    <QueryClientProvider client={queryClient}>
                        {children} {/* The rest of your application */}
                        <ReactQueryDevtools initialIsOpen={false} />
                    </QueryClientProvider>
                </SessionProvider>
            </NextUIProvider>
        </NuqsAdapter>
    );
}
