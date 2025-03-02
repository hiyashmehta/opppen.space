"use client";

import { GalleryVerticalEnd, Settings2 } from "lucide-react";
import * as React from "react";

import { CommunitySwitcher } from "@/components/community-switcher";
import { NavUser } from "@/components/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar";
import { BiBarChartAlt2, BiSolidBarChartAlt2 } from "react-icons/bi";
import { NavProjects } from "./nav-projects";
// This is sample data.
const projects = [
    {
        name: "Home",
        url: "",
        icon: GalleryVerticalEnd,
        activeIcon: GalleryVerticalEnd,
    },
    {
        name: "Posts",
        url: "/posts",
        icon: GalleryVerticalEnd,
        activeIcon: GalleryVerticalEnd,
    },
    {
        name: "Courses",
        url: "/courses",
        icon: GalleryVerticalEnd,
        activeIcon: GalleryVerticalEnd,
    },
    {
        name: "Members",
        url: "/members",
        icon: GalleryVerticalEnd,
        activeIcon: GalleryVerticalEnd,
    },

    // {
    //     name: "Chat",
    //     url: "/chat",
    //     icon: PiChatCircleDotsLight,
    //     activeIcon: PiChatCircleDotsFill,
    // },
    {
        name: "Analytics",
        url: "/analytics",
        icon: BiBarChartAlt2,
        activeIcon: BiSolidBarChartAlt2,
    },
    {
        name: "Settings",
        url: "/settings",
        icon: Settings2,
        activeIcon: Settings2,
    },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <CommunitySwitcher />
            </SidebarHeader>
            <SidebarContent>
                <NavProjects projects={projects} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
