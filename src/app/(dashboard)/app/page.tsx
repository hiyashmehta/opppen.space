"use client";
import { Button } from "@/components/ui/button";
import useCurrentUser from "@/lib/hooks/use-current-user";
import { api } from "@/trpc/react";
import { signOut } from "next-auth/react";

export default function Home() {
    const { user } = useCurrentUser();
    const { data } = api.community.hello.useQuery({
        text: "Hello, world!",
    });
    return (
        <div>
            <div>{user && `Hi ${user.email}!`}</div>
            <div>{user && user.name}</div>
            <div>{data?.greeting}</div>
            <Button onClick={() => signOut()}>Sign out</Button>
        </div>
    );
}
