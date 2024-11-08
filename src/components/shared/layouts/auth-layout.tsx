"use client";
import useCurrentUser from "@/lib/hooks/use-current-user";
import { api } from "@/trpc/react";
import { Spinner } from "@nextui-org/spinner";
import { redirect } from "next/navigation";
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, status } = useCurrentUser();
    const { data, isLoading } = api.community.getAllCommunities.useQuery();

    if (status === "loading" || isLoading)
        return (
            <div className="grid h-screen place-items-center">
                <Spinner />
            </div>
        );
    if (user && status === "authenticated") {
        if (data) {
            if (data.length > 0) {
                redirect(`/${data[0]?.id}`);
            }

            redirect("/welcome");
        }
    }
    return <div className="grid h-screen place-items-center">{children}</div>;
}
