import WebsiteLayout from "@/components/shared/layouts/website-layout";
import React from "react";

export async function generateMetadata() {
    return {
        title: "Opppen.space",
        description: "Home Page",
    };
}
export default function Layout({ children }: { children: React.ReactNode }) {
    return <WebsiteLayout>{children}</WebsiteLayout>;
}
