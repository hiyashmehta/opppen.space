"use client";

import { useSearchParams } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

export const Social = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");

    return (
        <div className="flex w-full items-center gap-x-2">
            <Button
                size="lg"
                className="w-full"
                variant="outline"
                // onClick={() => onclick("google")}
            >
                <FcGoogle className="h-5 w-5" />
            </Button>
            <Button
                size="lg"
                className="w-full"
                variant="outline"
                // onClick={() => onclick("github")}
            >
                <FaGithub className="h-5 w-5" />
            </Button>
        </div>
    );
};
