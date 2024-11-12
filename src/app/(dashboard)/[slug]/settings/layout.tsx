import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import React from "react";

export default async function CommunitySettingsLayout({
    children,
    params,
}: {
    children: React.ReactNode;

    params: Promise<{
        slug: string;
    }>;
}) {
    const slug = (await params).slug;

    return (
        <div>
            <div className="mb-4">
                <h1 className="text-2xl font-bold">Settings</h1>
                <p className="text-sm text-muted-foreground">
                    Customize settings, email preferences, and more for your
                    community
                </p>
            </div>
            <Tabs defaultValue="/">
                <TabsList className="grid max-w-2xl grid-cols-5">
                    {links.map((link) => (
                        <TabsTrigger key={link.title} value={link.href} asChild>
                            <Link href={`/${slug}/settings${link.href}`}>
                                {link.title}
                            </Link>
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>
            <div className="my-8 max-w-2xl">{children}</div>
        </div>
    );
}

const links = [
    {
        title: "General",
        href: "/",
    },
    {
        title: "Appearance",
        href: "/appearance",
    },
    {
        title: "Billing",
        href: "/billing",
    },
    {
        title: "Team",
        href: "/team",
    },
    {
        title: "Limits",
        href: "/limits",
    },
];
