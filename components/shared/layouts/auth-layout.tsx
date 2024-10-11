"use client";
import useCurrentUser from "@/lib/hooks/use-current-user";
import { Spinner } from "@nextui-org/spinner";
import { redirect } from "next/navigation";
export default function AuthLayout({
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
    if (user && status === "authenticated") {
        redirect("/app");
    }
    return <div className="grid h-screen place-items-center">{children}</div>;
}
