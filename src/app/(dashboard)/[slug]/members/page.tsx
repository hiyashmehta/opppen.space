"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useState } from "react";
import { UserCard } from "./user-card";
import { UserTable } from "./user-table";
import { generateMockUsers } from "./utils/mock-data";
import { ViewToggle } from "./view-toggle";

export default function UserListPage() {
    const [view, setView] = useState<"grid" | "table">("grid");
    const users = generateMockUsers(12);

    return (
        <div className="min-h-screen text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
            <div className="container mx-auto max-w-7xl px-4 py-8">
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <h1 className="text-2xl font-bold dark:text-white">
                                Team Members
                            </h1>
                            <ViewToggle view={view} onViewChange={setView} />
                        </div>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" /> Add Member
                        </Button>
                    </div>

                    <div className="flex items-center gap-4">
                        <Input
                            type="search"
                            placeholder="Search members..."
                            className="max-w-xs border-zinc-800 text-zinc-100 placeholder:text-zinc-500 dark:bg-zinc-900/50"
                        />
                        <Button
                            variant="outline"
                            // className="border-zinc-800 text-zinc-100 hover:bg-zinc-800"
                        >
                            Filter
                        </Button>
                    </div>

                    {view === "grid" ? (
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {users.map((user) => (
                                <UserCard key={user.id} user={user} />
                            ))}
                        </div>
                    ) : (
                        <UserTable users={users} />
                    )}
                </div>
            </div>
        </div>
    );
}
