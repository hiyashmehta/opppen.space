"use client";

import { ChevronsUpDown, Plus } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";
import { useCreateCommunityDialog } from "@/lib/hooks/community/use-create-community-dialog";
import { api } from "@/trpc/react";
import { useParams, useRouter } from "next/navigation";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Skeleton } from "./ui/skeleton";

export function CommunitySwitcher() {
    const { isMobile } = useSidebar();
    const { data, isLoading } = api.community.getAllCommunities.useQuery();
    const router = useRouter();

    const params = useParams();
    const communitySlug = params.communitySlug as string;
    const activeCommunity = data?.find((c) => c.id === communitySlug);

    const { setIsOpen } = useCreateCommunityDialog();
    const handleOpen = () => {
        setIsOpen(true);
    };

    if (isLoading && !data) {
        return (
            <div>
                <Skeleton className="h-10 w-20" />
            </div>
        );
    }
    if (data)
        return (
            <SidebarMenu>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton
                                size="lg"
                                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                            >
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg ">
                                    <Avatar>
                                        <AvatarFallback>
                                            {activeCommunity?.name[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">
                                        {activeCommunity?.name}
                                    </span>
                                    <span className="truncate text-xs">
                                        {activeCommunity?.slug}
                                    </span>
                                </div>
                                <ChevronsUpDown className="ml-auto" />
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                            align="start"
                            side={isMobile ? "bottom" : "right"}
                            sideOffset={4}
                        >
                            <DropdownMenuLabel className="text-xs text-muted-foreground">
                                Communities
                            </DropdownMenuLabel>
                            {data.map((community, index) => (
                                <DropdownMenuItem
                                    key={community.id}
                                    onClick={() =>
                                        router.push(`/${community.id}`)
                                    }
                                    className="gap-2 p-2"
                                >
                                    <div className="flex size-6 items-center justify-center rounded-sm border">
                                        <Avatar className="size-4 shrink-0">
                                            <AvatarFallback>
                                                {community.name[0]}
                                            </AvatarFallback>
                                        </Avatar>
                                        {/* <team.logo className="size-4 shrink-0" /> */}
                                    </div>
                                    {community.name}
                                    {/* <DropdownMenuShortcut>
                                        ⌘{index + 1}
                                    </DropdownMenuShortcut> */}
                                </DropdownMenuItem>
                            ))}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                className="gap-2 p-2"
                                onClick={handleOpen}
                            >
                                <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                                    <Plus className="size-4" />
                                </div>
                                <div className="font-medium text-muted-foreground">
                                    Add team
                                </div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        );
    return <div></div>;
}
