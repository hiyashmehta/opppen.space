import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BellIcon } from "lucide-react";
import Image from "next/image";
import CommunitySwitch from "./community-switch";

export default function DashboardHeader() {
    return (
        <div className="px-8 py-4">
            <div className="flex items-center  gap-4">
                <Image
                    src="/next.svg"
                    alt="logo"
                    width={200}
                    height={50}
                    className="h-8 w-40"
                />
                <div className="flex flex-grow items-center justify-between">
                    {/* Links */}
                    <div>
                        <CommunitySwitch />
                    </div>
                    {/*  */}
                    {/* Search bar */}
                    <div>
                        {/* Search bar */}

                        <Input />
                    </div>
                    {/* Menu icons */}
                    <div className="flex items-center gap-4">
                        {/* Notifications */}
                        <Button
                            variant={"outline"}
                            size={"icon"}
                            className="rounded-full"
                        >
                            <BellIcon />
                        </Button>
                        {/* User profile */}
                        <Avatar>
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </div>
    );
}
