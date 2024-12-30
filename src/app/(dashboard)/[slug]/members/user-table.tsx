import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import type { User } from "./utils/mock-data";

interface UserTableProps {
    users: User[];
}

export function UserTable({ users }: UserTableProps) {
    return (
        <div className="rounded-md border border-zinc-800 dark:bg-zinc-900/50">
            <Table>
                <TableHeader>
                    <TableRow className="border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800/50">
                        <TableHead className="text-zinc-400">
                            <input
                                type="checkbox"
                                className="rounded border-zinc-700"
                            />
                        </TableHead>
                        <TableHead className="text-zinc-400">
                            Worker ID
                        </TableHead>
                        <TableHead className="text-zinc-400">
                            External Worker ID
                        </TableHead>
                        <TableHead className="text-zinc-400">Member</TableHead>
                        <TableHead className="text-zinc-400">Country</TableHead>
                        <TableHead className="text-zinc-400">Role</TableHead>
                        <TableHead className="text-zinc-400">
                            Worker Type
                        </TableHead>
                        <TableHead className="text-zinc-400">Status</TableHead>
                        <TableHead className="text-zinc-400">
                            Start Date
                        </TableHead>
                        <TableHead className="text-zinc-400">Teams</TableHead>
                        <TableHead className="text-right text-zinc-400">
                            Actions
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user) => (
                        <TableRow
                            key={user.id}
                            className="border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800/50"
                        >
                            <TableCell className="text-zinc-100">
                                <input
                                    type="checkbox"
                                    className="rounded border-zinc-700"
                                />
                            </TableCell>
                            <TableCell className="dark:text-zinc-100">
                                {user.id}
                            </TableCell>
                            <TableCell className="dark:text-zinc-100">
                                {user.externalId}
                            </TableCell>
                            <TableCell className="dark:text-zinc-100">
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage
                                            src={user.avatar}
                                            alt={user.name}
                                        />
                                        <AvatarFallback>
                                            {user.name[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-medium">
                                            {user.name}
                                        </div>
                                        <div className="text-sm text-zinc-400">
                                            {user.email}
                                        </div>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="dark:text-zinc-100">
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={`https://flagcdn.com/24x18/${user.country.code.toLowerCase()}.png`}
                                        alt={user.country.name}
                                        className="h-4 w-5 rounded"
                                        unoptimized
                                        width={40}
                                        height={30}
                                    />
                                    {user.country.name}
                                </div>
                            </TableCell>
                            <TableCell className="dark:text-zinc-100">
                                {user.role}
                            </TableCell>
                            <TableCell className="dark:text-zinc-100">
                                {user.workerType}
                            </TableCell>
                            <TableCell className="dark:text-zinc-100">
                                <Badge
                                    variant={
                                        user.status === "Active"
                                            ? "default"
                                            : user.status === "Inactive"
                                              ? "secondary"
                                              : "destructive"
                                    }
                                    className={
                                        user.status === "Active"
                                            ? "bg-green-500/20 text-green-400"
                                            : user.status === "Inactive"
                                              ? "bg-zinc-500/20 text-zinc-400"
                                              : "bg-yellow-500/20 text-yellow-400"
                                    }
                                >
                                    {user.status}
                                </Badge>
                            </TableCell>
                            <TableCell className="dark:text-zinc-100">
                                {user.startDate}
                            </TableCell>
                            <TableCell className="dark:text-zinc-100">
                                <div className="flex flex-wrap gap-1">
                                    {user.teams.map((team) => (
                                        <Badge
                                            key={team}
                                            variant="outline"
                                            className="border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300"
                                        >
                                            {team}
                                        </Badge>
                                    ))}
                                </div>
                            </TableCell>
                            <TableCell className="text-zinc-100">
                                <div className="flex justify-end gap-2">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">
                                                    Open menu
                                                </span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            align="end"
                                            className="border-zinc-800 bg-zinc-900"
                                        >
                                            <DropdownMenuItem className="text-zinc-100 focus:bg-zinc-800 focus:text-zinc-100">
                                                <Pencil className="mr-2 h-4 w-4" />{" "}
                                                Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="text-red-400 focus:bg-zinc-800 focus:text-red-400">
                                                <Trash2 className="mr-2 h-4 w-4" />{" "}
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
