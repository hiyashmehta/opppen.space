"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

export const Social = ({ pageType }: { pageType: "login" | "register" }) => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");

    const handleSocialLogin = async (provider: "google" | "github") => {
        // if (pageType === "login") {
        //     // loginWithSocial(provider, callbackUrl);
        //     signIn(provider);
        // }
        // if (pageType === "register") {

        //     // registerWithSocial(provider, callbackUrl);
        // }
        await signIn(provider);
    };

    return (
        <div className="flex w-full items-center gap-x-2">
            <Button
                size="lg"
                className="w-full"
                variant="outline"
                onClick={() => handleSocialLogin("google")}
            >
                <FcGoogle className="h-5 w-5" />
            </Button>
            <Button
                size="lg"
                className="w-full"
                variant="outline"
                onClick={() => handleSocialLogin("github")}
            >
                <FaGithub className="h-5 w-5" />
            </Button>
        </div>
    );
};
