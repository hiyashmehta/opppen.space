"use client";
import { Button } from "@/components/ui/button";
import useCurrentUser from "@/lib/hooks/use-current-user";
import { signOut } from "next-auth/react";

export default function Home() {
    const { user } = useCurrentUser();
    return (
        <div>
            <div>{user && `Hi ${user.email}!`}</div>
            <Button onClick={() => signOut()}>Sign out</Button>
        </div>
    );
}
