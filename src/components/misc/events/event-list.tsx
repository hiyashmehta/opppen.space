"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Calendar,
    Clock,
    Maximize2,
    MessageSquare,
    MoreHorizontal,
    Share2,
    X,
} from "lucide-react";
import { useState } from "react";
import { AttachmentItem } from "./attachment-item";
import { PriorityBadge } from "./priority-badge";

interface Event {
    id: string;
    title: string;
    priority: "High" | "Medium" | "Low";
    daysLeft: number;
    comments: number;
    views: number;
    status: "TODO" | "IN_PROGRESS" | "COMPLETED";
}

const events: Event[] = [
    {
        id: "1",
        title: "Schedule me an appointment with my endocrinologist",
        priority: "High",
        daysLeft: 15,
        comments: 6,
        views: 17,
        status: "TODO",
    },
    {
        id: "2",
        title: "Help DStudio get more customers",
        priority: "Medium",
        daysLeft: 15,
        comments: 23,
        views: 12,
        status: "TODO",
    },
    // Add more events as needed
];

export function EventList() {
    const [, setSelectedEvent] = useState<Event | null>(null);
    const [open, setOpen] = useState(false);

    return (
        <div className="flex h-full">
            <div className="flex-1 space-y-8 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">My Events</h1>
                    <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                            <Share2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Maximize2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <Tabs defaultValue="all">
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="remote">Remote</TabsTrigger>
                        <TabsTrigger value="in-person">In Person</TabsTrigger>
                    </TabsList>
                </Tabs>

                <div className="space-y-6">
                    <div className="space-y-4">
                        <h2 className="text-sm font-medium text-muted-foreground">
                            TODO <span className="text-xs">(2)</span>
                        </h2>
                        {events
                            .filter((event) => event.status === "TODO")
                            .map((event) => (
                                <div
                                    key={event.id}
                                    className="cursor-pointer rounded-lg border bg-card p-4 transition-shadow hover:shadow-sm"
                                    onClick={() => {
                                        setSelectedEvent(event);
                                        setOpen(true);
                                    }}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="font-medium">
                                            {event.title}
                                        </h3>
                                        <PriorityBadge
                                            priority={event.priority}
                                        />
                                    </div>
                                    <div className="mt-4 flex gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            <span>
                                                {event.daysLeft} Days left
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MessageSquare className="h-4 w-4" />
                                            <span>{event.comments}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            <span>{event.views}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent className="w-full p-0 sm:max-w-[600px]">
                    <div className="flex h-full flex-col">
                        <div className="border-b p-6">
                            <div className="mb-4 flex items-start justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="rounded bg-muted px-2 py-1 text-xs">
                                        Appointments
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="icon">
                                        <Share2 className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                        <Maximize2 className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setOpen(false)}
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <h2 className="mb-4 text-xl font-semibold">
                                Schedule Me An Appointment With My
                                Endocrinologist
                            </h2>
                            <div className="flex items-center gap-4">
                                <div className="rounded-full bg-[#DCFCE7] px-3 py-1 text-xs font-medium text-[#166534]">
                                    High Priority
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Calendar className="h-4 w-4" />
                                    <span>Jul 10 - 14</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 overflow-auto">
                            <div className="space-y-6 p-6">
                                <div className="rounded-lg bg-[#F3F4F6] p-4 dark:bg-slate-800">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        <span className="text-sm">
                                            Time Spent on this project
                                        </span>
                                        <span className="ml-auto font-medium">
                                            12:45:00
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-sm font-medium">
                                        Description
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Specializes in the diagnosis and
                                        treatment of diseases related to the
                                        endocrine system, which includes glands
                                        and organs that produce hormones.
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        These hormones regulate various bodily
                                        functions such as metabolism, growth,
                                        and reproduction.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-sm font-medium">
                                        Attachments
                                    </h3>
                                    <div className="space-y-2">
                                        <AttachmentItem
                                            name="Medical Prescription.docx"
                                            time="10:32 PM,"
                                            date="25 August"
                                        />
                                        <AttachmentItem
                                            name="Doctor Appointment.pdf"
                                            time="14:35 PM,"
                                            date="24 August"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex gap-4 border-b">
                                        <Button
                                            variant="ghost"
                                            className="relative h-9 rounded-none border-b-2 border-primary"
                                        >
                                            Comments
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            className="relative h-9 rounded-none"
                                        >
                                            Updates
                                        </Button>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex gap-3">
                                            <Avatar className="h-8 w-8">
                                                <AvatarImage src="/placeholder.svg" />
                                                <AvatarFallback>
                                                    JS
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-sm font-medium">
                                                        John Smith
                                                    </span>
                                                    <span className="text-xs text-muted-foreground">
                                                        • 17th Feb 2024
                                                    </span>
                                                </div>
                                                <p className="text-sm text-muted-foreground">
                                                    I want a complete diet plan.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <Avatar className="h-8 w-8">
                                                <AvatarImage src="/placeholder.svg" />
                                                <AvatarFallback>
                                                    JS
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-sm font-medium">
                                                        John Smith
                                                    </span>
                                                    <span className="text-xs text-muted-foreground">
                                                        • Just Now
                                                    </span>
                                                </div>
                                                <p className="text-sm text-muted-foreground">
                                                    Do you have any update?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto border-t p-4">
                            <div className="flex gap-3">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/placeholder.svg" />
                                    <AvatarFallback>JS</AvatarFallback>
                                </Avatar>
                                <Input
                                    className="flex-1"
                                    placeholder="Add a comment..."
                                />
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
