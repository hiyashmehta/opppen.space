import { cn } from "@/lib/utils";
import { TRPCReactProvider } from "@/trpc/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

const title = "Express yourself to the world | opppen.space";
const description =
    "Express your knowledge, goals, and ideas. Share your thoughts with the world.An open-source platform for building your online community.  ";
export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        images: [
            {
                url: "https://opppen.space/og-image.png",
                width: 1200,
                height: 600,
                alt: "App Preview Image",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(inter.className)}>
                <TRPCReactProvider>
                    <Providers>{children}</Providers>
                </TRPCReactProvider>
            </body>
        </html>
    );
}
