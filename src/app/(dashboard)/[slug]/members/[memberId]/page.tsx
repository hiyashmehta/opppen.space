import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, MessageSquare, Trophy, Users } from "lucide-react";
import { Collaborator } from "./collaborator";
import { Stats } from "./stats";

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="relative h-48 bg-muted">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform">
                    <Avatar className="h-24 w-24 border-4 border-background">
                        <AvatarImage
                            src="/placeholder.svg"
                            alt="Profile picture"
                        />
                        <AvatarFallback>CP</AvatarFallback>
                    </Avatar>
                </div>
            </div>

            <div className="container mx-auto max-w-4xl px-4 pt-16">
                {/* Profile Info */}
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Charles Patterson</h1>
                    <p className="mt-2 text-muted-foreground">
                        Follow for daily design tips, memes, and freebies ✌️
                        designer / co-founder
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                        @danielnelson · Joined Jun 2020 · Global
                    </p>

                    <Stats followers={3492} following={3492} />

                    <div className="flex justify-center gap-2">
                        <Button>Follow</Button>
                        <Button variant="outline">Resume</Button>
                        <Button variant="ghost" size="icon">
                            ···
                        </Button>
                    </div>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="profile" className="mt-8">
                    <TabsList className="w-full justify-start">
                        <TabsTrigger value="profile">Profile</TabsTrigger>
                        <TabsTrigger value="threads">Threads</TabsTrigger>
                        <TabsTrigger value="shows">Shows</TabsTrigger>
                        <TabsTrigger value="series">Series</TabsTrigger>
                        <TabsTrigger value="guestbook">Guestbook</TabsTrigger>
                    </TabsList>
                    <TabsContent value="profile" className="mt-6">
                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="md:col-span-2">
                                <div className="space-y-6">
                                    <section>
                                        <h2 className="mb-4 text-xl font-semibold">
                                            About
                                        </h2>
                                        <div className="space-y-4">
                                            <p>Hi 👋,</p>
                                            <p>
                                                I&apos;m Rong Liew - Cofounder &
                                                CEO working on Showcase.
                                            </p>
                                            <p className="text-muted-foreground">
                                                Showcase is a platform to
                                                network built for anyone who
                                                codes to connect, share
                                                knowledge, and find new
                                                opportunities. Our mission is to
                                                make career opportunities for
                                                tech workers. We are focused on
                                                achieving this via great
                                                developer representation,
                                                fostering a great community, and
                                                opening up access to new job
                                                opportunities.
                                            </p>
                                        </div>
                                    </section>

                                    <section>
                                        <h3 className="mb-3 font-medium">
                                            Previously collaborated with
                                        </h3>
                                        <div className="flex flex-wrap gap-4">
                                            <Collaborator
                                                name="Jenny Wilson"
                                                image="/placeholder.svg"
                                            />
                                            <Collaborator
                                                name="Derick Lee"
                                                image="/placeholder.svg"
                                            />
                                            <Collaborator
                                                name="Scott Spence"
                                                image="/placeholder.svg"
                                            />
                                            <Collaborator
                                                name="Ariana"
                                                image="/placeholder.svg"
                                            />
                                        </div>
                                    </section>

                                    <section>
                                        <h3 className="mb-3 font-medium">
                                            Expertise
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="secondary">
                                                Web development
                                            </Badge>
                                            <Badge variant="secondary">
                                                UI/UX design
                                            </Badge>
                                            <Badge variant="secondary">
                                                Open Source
                                            </Badge>
                                            <Badge variant="secondary">
                                                App Development
                                            </Badge>
                                            <Badge variant="secondary">
                                                Mentorship
                                            </Badge>
                                            <Badge variant="secondary">
                                                Sprint planning
                                            </Badge>
                                            <Badge variant="secondary">
                                                Leadership
                                            </Badge>
                                            <Badge variant="secondary">
                                                Engineering lead
                                            </Badge>
                                        </div>
                                    </section>

                                    <section>
                                        <h3 className="mb-3 font-medium">
                                            Fluent in
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="outline">
                                                English
                                            </Badge>
                                            <Badge variant="outline">
                                                Madrian
                                            </Badge>
                                            <Badge variant="outline">
                                                Spanish
                                            </Badge>
                                            <Badge variant="outline">
                                                French
                                            </Badge>
                                        </div>
                                    </section>

                                    <section>
                                        <h3 className="mb-3 font-medium">
                                            Tech stack
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {/* Add tech stack badges here */}
                                        </div>
                                    </section>
                                </div>
                            </div>

                            <div>
                                <Card>
                                    <CardContent className="space-y-6 p-6">
                                        <div>
                                            <h3 className="mb-2 font-medium">
                                                Front page
                                            </h3>
                                            <a
                                                href="#"
                                                className="flex items-center gap-1 text-sm text-blue-500 hover:underline"
                                            >
                                                tianrongliew.showcase.com
                                                <ExternalLink className="h-3 w-3" />
                                            </a>
                                        </div>

                                        <div>
                                            <h3 className="mb-4 font-medium">
                                                Community Karma
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <MessageSquare className="h-4 w-4 text-blue-500" />
                                                        <span className="text-sm">
                                                            7,216
                                                        </span>
                                                    </div>
                                                    <span className="text-sm text-muted-foreground">
                                                        Threads
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <MessageSquare className="h-4 w-4 text-green-500" />
                                                        <span className="text-sm">
                                                            4,812
                                                        </span>
                                                    </div>
                                                    <span className="text-sm text-muted-foreground">
                                                        Replies
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <Users className="h-4 w-4 text-orange-500" />
                                                        <span className="text-sm">
                                                            260
                                                        </span>
                                                    </div>
                                                    <span className="text-sm text-muted-foreground">
                                                        People invited
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="mb-4 font-medium">
                                                Badges
                                            </h3>
                                            <div className="flex gap-2">
                                                <Trophy className="h-6 w-6 text-yellow-500" />
                                                <Trophy className="h-6 w-6 text-blue-500" />
                                                <Trophy className="h-6 w-6 text-orange-500" />
                                                <Trophy className="h-6 w-6 text-red-500" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
