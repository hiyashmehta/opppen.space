import React from "react";

export async function generateMetadata() {
    return {
        title: "Home Page",
        description: "Home Page",
    };
}
export default function Layout({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}
