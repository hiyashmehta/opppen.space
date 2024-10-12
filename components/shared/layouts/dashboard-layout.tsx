"use client";

import useCurrentUser from "@/lib/hooks/use-current-user";
import { Spinner } from "@nextui-org/spinner";
import { redirect } from "next/navigation";
import React from "react";
import DashboardHeader from "../header/dashboard";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, status } = useCurrentUser();

    if (status === "loading")
        return (
            <div className="grid h-screen place-items-center">
                <Spinner />
            </div>
        );
    if (!user && status === "unauthenticated") {
        redirect("/login");
    }
    return (
        <div>
            <DashboardHeader />
            {children}
        </div>
    );
}
