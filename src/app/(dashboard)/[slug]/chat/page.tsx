/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Clock,
    Moon,
    MoreVertical,
    Paperclip,
    Phone,
    Search,
    Sun,
    User,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ChatPage() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        document.body.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`flex h-screen ${isDarkMode ? "dark" : ""}`}>
            <div className="flex h-screen bg-white text-gray-900 dark:bg-[#1A1A1A] dark:text-white">
                {/* Left Sidebar */}
                <div className="hidden w-80 flex-col border-r border-gray-200 dark:border-gray-800 md:flex">
                    <div className="p-4">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <h2 className="text-lg font-semibold">Chats</h2>
                                <Badge
                                    variant="secondary"
                                    className="bg-gray-200 text-xs dark:bg-gray-800"
                                >
                                    24
                                </Badge>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleTheme}
                            >
                                {isDarkMode ? (
                                    <Sun className="h-5 w-5" />
                                ) : (
                                    <Moon className="h-5 w-5" />
                                )}
                            </Button>
                        </div>
                        <div className="relative">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                            <Input
                                placeholder="Search..."
                                className="border-gray-200 bg-gray-100 pl-8 text-gray-900 placeholder:text-gray-400 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:placeholder:text-gray-500"
                            />
                        </div>
                    </div>

                    <div className="flex gap-2 px-4 py-2">
                        <Button
                            variant="ghost"
                            className="flex-1 justify-start bg-gray-100 dark:bg-gray-800"
                        >
                            Inbox
                        </Button>
                        <Button
                            variant="ghost"
                            className="flex-1 justify-start text-gray-500"
                        >
                            Unread
                        </Button>
                    </div>

                    <ScrollArea className="flex-1">
                        <div className="space-y-1 p-2">
                            {chats.map((chat) => (
                                <div
                                    key={chat.id}
                                    className="flex cursor-pointer items-start gap-3 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                                >
                                    <div className="relative">
                                        <Avatar className="h-10 w-10">
                                            <AvatarImage src={chat.avatar} />
                                            <AvatarFallback>
                                                {chat.name[0]}
                                            </AvatarFallback>
                                        </Avatar>
                                        {chat.unread && (
                                            <Badge className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center bg-red-500 p-0 text-white">
                                                {chat.unread}
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="min-w-0 flex-1 overflow-hidden">
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm font-medium">
                                                {chat.name}
                                            </p>
                                            <span className="text-xs text-gray-500">
                                                {chat.time}
                                            </span>
                                        </div>
                                        <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                                            {chat.lastMessage}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>

                {/* Main Chat Area */}
                <div className="flex flex-1 flex-col bg-white dark:bg-[#1E1E1E]">
                    <div className="border-b border-gray-200 p-4 dark:border-gray-800">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-medium">
                                    Application for launch promotion
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Via Web
                                </p>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-gray-500 dark:text-gray-400"
                            >
                                <MoreVertical className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    <ScrollArea className="flex-1 p-4">
                        <div className="space-y-6">
                            {messages.map((message, index) => (
                                <div key={index} className="flex gap-3">
                                    <Avatar className="mt-1 h-10 w-10">
                                        <AvatarImage src={message.avatar} />
                                        <AvatarFallback>
                                            {message.name[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium">
                                                {message.name}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                {message.time}
                                            </span>
                                        </div>
                                        <div className="mt-1">
                                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                                {message.content}
                                            </p>
                                            {message.image && (
                                                <div className="mt-2 overflow-hidden rounded-lg">
                                                    <Image
                                                        src={message.image}
                                                        alt="Shared image"
                                                        width={400}
                                                        height={200}
                                                        className="object-cover"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>

                    <div className="border-t border-gray-200 p-4 dark:border-gray-800">
                        <div className="flex gap-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-gray-500 dark:text-gray-400"
                            >
                                <Paperclip className="h-5 w-5" />
                            </Button>
                            <Input
                                placeholder="Type a message..."
                                className="flex-1 border-gray-200 bg-gray-100 text-gray-900 placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="hidden w-80 flex-col border-l border-gray-200 dark:border-gray-800 lg:flex">
                    <div className="border-b border-gray-200 p-6 text-center dark:border-gray-800">
                        <Avatar className="mx-auto h-20 w-20">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback>TS</AvatarFallback>
                        </Avatar>
                        <h3 className="mt-4 text-lg font-medium">
                            Taylor Smith
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            taylor_smith@mail.com
                        </p>
                        <div className="mt-4 flex items-center justify-center gap-4 text-gray-500 dark:text-gray-400">
                            <User className="h-5 w-5" />
                            <Clock className="h-5 w-5" />
                            <Phone className="h-5 w-5" />
                        </div>
                    </div>

                    <div className="p-4">
                        <h4 className="mb-3 font-medium">Notes</h4>
                        <div className="space-y-2">
                            <div className="rounded-md bg-red-100 px-3 py-2 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                                Internal Issue
                            </div>
                            <div className="rounded-md bg-purple-100 px-3 py-2 text-sm text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
                                Pro User
                            </div>
                            <div className="rounded-md bg-blue-100 px-3 py-2 text-sm text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                                Authenticated
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 p-4">
                        <div className="mb-4 flex items-center justify-between">
                            <h4 className="font-medium">Media</h4>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Links
                            </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={i}
                                    className="relative aspect-square overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800"
                                >
                                    <Image
                                        src="/placeholder.svg"
                                        alt="Media item"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const chats = [
    {
        id: 1,
        name: "Tony Reichert",
        avatar: "/placeholder.svg",
        lastMessage:
            "Hi, I'm having trouble logging into my account. Can you help?",
        time: "12:34",
        unread: 1,
    },
    {
        id: 2,
        name: "Jordan Davi",
        avatar: "/placeholder.svg",
        lastMessage:
            "I keep getting an error message when I try to checkout my cart.",
        time: "11:20",
        unread: 2,
    },
    // Add more chats as needed
];

const messages = [
    {
        sender: "user",
        name: "Taylor Smith",
        avatar: "/placeholder.svg",
        content:
            "Hello, I'm having some trouble with a piece of software I recently downloaded from your site. It keeps crashing every time I try to open it.",
        time: "14:31",
    },
    {
        sender: "user",
        name: "Taylor Smith",
        avatar: "/placeholder.svg",
        content: "Every time I attempt to launch the software, it crashes",
        time: "14:35",
        image: "/placeholder.svg",
    },
    {
        sender: "support",
        name: "Kate Moore (Support)",
        avatar: "/placeholder.svg",
        content:
            "Thank you for letting me know, Taylor. Can you tell me which version of the software you're using and what operating system you're on?",
        time: "14:39",
    },
    {
        sender: "user",
        name: "Taylor Smith",
        avatar: "/placeholder.svg",
        content:
            "I'm using version 5.2 of the software on Windows 10. It sounds like there might be an issue with the .NET framework on your PC.",
        time: "15:20",
    },
    {
        sender: "support",
        name: "Kate Moore (Support)",
        avatar: "/placeholder.svg",
        content:
            "Thank you for providing those details. It does seem like it could be related to the .NET Framework. To address this, I recommend the following steps:",
        time: "15:23",
    },
];
