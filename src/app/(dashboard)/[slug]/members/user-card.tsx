import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import type { User } from "./utils/mock-data";

interface UserCardProps {
    user: User;
}

export function UserCard({ user }: UserCardProps) {
    return (
        <Link href={`members/${user.id}`}>
            <div className="space-y-4 rounded-xl border border-zinc-800 p-6 text-center transition-colors hover:bg-zinc-200 dark:bg-zinc-900/50 dark:hover:bg-zinc-800/50">
                <Avatar className="mx-auto h-24 w-24">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>

                <div className="space-y-1">
                    <h3 className="text-lg font-semibold dark:text-zinc-100">
                        {user.name}
                    </h3>
                    <p className="text-sm text-zinc-400">{user.role}</p>
                </div>

                <p className="text-sm dark:text-zinc-300">{user.bio}</p>

                <div className="flex justify-center gap-4">
                    {user.social?.twitter && (
                        <a
                            href={user.social.twitter}
                            className="text-zinc-400 transition-colors hover:text-zinc-100"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Twitter className="h-5 w-5" />
                        </a>
                    )}
                    {user.social?.linkedin && (
                        <a
                            href={user.social.linkedin}
                            className="text-zinc-400 transition-colors hover:text-zinc-100"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                    )}
                    {user.social?.github && (
                        <a
                            href={user.social.github}
                            className="text-zinc-400 transition-colors hover:text-zinc-100"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                    )}
                </div>
            </div>
        </Link>
    );
}
