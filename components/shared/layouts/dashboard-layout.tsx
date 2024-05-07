"use client";

import useCurrentUser from "@/lib/hooks/use-current-user";
import { redirect } from "next/navigation";
import React from "react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, status } = useCurrentUser();

    if (status === "loading") return <div>Loading...</div>;
    if (!user && status === "unauthenticated") {
        redirect("/login");
    }
    return <div>{children}</div>;
}
