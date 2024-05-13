"use client";
import useCurrentUser from "@/lib/hooks/use-current-user";
import { redirect } from "next/navigation";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, status } = useCurrentUser();

    if (status === "loading") return <div>Loading...</div>;
    if (user && status === "authenticated") {
        redirect("/app");
    }
    return <div>{children}</div>;
}
