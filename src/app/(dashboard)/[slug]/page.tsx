import { BookOpen, ChevronRight, GraduationCap, Layout } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default async function CommunityPage() {
    const weekData = [15, 25, 10, 20, 15, 8, 22];

    return (
        <div className="min-h-screen bg-background">
            {/* Sidebar */}
            {/* <div className="fixed inset-y-0 z-50 flex w-56 flex-col bg-white">
                <div className="flex h-16 items-center gap-2 border-b px-6">
                    <div className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-600 text-white">
                        <GraduationCap className="h-5 w-5" />
                    </div>
                    <span className="font-semibold">Academic</span>
                </div>
                <div className="flex-1 overflow-auto py-2">
                    <nav className="grid gap-1 px-2">
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg bg-accent/50 px-3 py-2 text-accent-foreground"
                        >
                            <Home className="h-4 w-4" />
                            Home
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                            <BookMarked className="h-4 w-4" />
                            Bookmarks
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                            <BookOpen className="h-4 w-4" />
                            Courses
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                            <Layout className="h-4 w-4" />
                            Tutorials
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                            <BarChart3 className="h-4 w-4" />
                            Best Practices
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                            <GraduationCap className="h-4 w-4" />
                            Certifications
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                            <Users2 className="h-4 w-4" />
                            Resources
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                            <Calendar className="h-4 w-4" />
                            Events
                        </Link>
                    </nav>
                </div>
                <div className="mt-auto border-t">
                    <div className="grid gap-1 px-2 py-2">
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                            <Settings className="h-4 w-4" />
                            Setting
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                            <HelpCircle className="h-4 w-4" />
                            Help Center
                        </Link>
                    </div>
                </div>
            </div> */}

            {/* Main Content */}
            <div>
                {/* Header */}
                {/* <header className="flex h-16 items-center justify-between border-b bg-white px-6">
                    <h1 className="text-lg">Welcome back, Alesia 👋</h1>
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full"
                        >
                            <Search className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full"
                        >
                            <MessageSquare className="h-5 w-5" />
                        </Button>
                        <Image
                            src="/placeholder.svg?height=32&width=32"
                            width={32}
                            height={32}
                            className="rounded-full"
                            alt="Avatar"
                        />
                    </div>
                </header> */}

                {/* Content */}
                <main className="grid grid-cols-[1fr_300px] gap-6 p-6">
                    <div className="space-y-6">
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            <Card className="bg-teal-50 p-6">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-teal-600 text-white">
                                        <BookOpen className="h-6 w-6" />
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-xs"
                                    >
                                        View details
                                        <ChevronRight className="ml-1 h-4 w-4" />
                                    </Button>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-2xl font-bold">24</div>
                                    <div className="text-sm text-muted-foreground">
                                        Enrolled Course
                                    </div>
                                </div>
                            </Card>
                            <Card className="bg-violet-50 p-6">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-violet-600 text-white">
                                        <Layout className="h-6 w-6" />
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-xs"
                                    >
                                        View details
                                        <ChevronRight className="ml-1 h-4 w-4" />
                                    </Button>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-2xl font-bold">56</div>
                                    <div className="text-sm text-muted-foreground">
                                        Lesson
                                    </div>
                                </div>
                            </Card>
                            <Card className="bg-orange-50 p-6">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-orange-600 text-white">
                                        <GraduationCap className="h-6 w-6" />
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-xs"
                                    >
                                        View details
                                        <ChevronRight className="ml-1 h-4 w-4" />
                                    </Button>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-2xl font-bold">17</div>
                                    <div className="text-sm text-muted-foreground">
                                        Certificates
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* Continue Learning */}
                        <div>
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-lg font-semibold">
                                    Continue Learning
                                </h2>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-xs text-muted-foreground"
                                >
                                    See All
                                </Button>
                            </div>
                            <Card className="divide-y">
                                <div className="flex items-center gap-4 p-4">
                                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-500 text-white">
                                        <Layout className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium">
                                                    Design Accessibility
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    Advanced • 9 hours
                                                </p>
                                            </div>
                                            <span className="text-sm text-muted-foreground">
                                                30%
                                            </span>
                                        </div>
                                        <Progress value={30} className="h-2" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4">
                                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-violet-500 text-white">
                                        <Layout className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium">
                                                    UX Research
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    Intermediate • 4 hours
                                                </p>
                                            </div>
                                            <span className="text-sm text-muted-foreground">
                                                70%
                                            </span>
                                        </div>
                                        <Progress value={70} className="h-2" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4">
                                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-500 text-white">
                                        <Layout className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium">
                                                    Figma for Beginner
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    Beginner • 7 hours
                                                </p>
                                            </div>
                                            <span className="text-sm text-muted-foreground">
                                                100%
                                            </span>
                                        </div>
                                        <Progress value={100} className="h-2" />
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* Recommended Courses */}
                        <div>
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-lg font-semibold">
                                    Recommended for you
                                </h2>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-xs text-muted-foreground"
                                >
                                    See All
                                </Button>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <Card className="p-6">
                                    <div className="mb-4">
                                        <div className="grid h-12 w-12 place-items-center rounded-xl bg-teal-500 text-white">
                                            <Layout className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <h3 className="mb-2 font-semibold">
                                        Design Workshop Facilitation
                                    </h3>
                                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                                        Master your skills in design workshop
                                        facilitation and learn how to promote
                                        collaboration and find...
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <span>Advanced</span>
                                        <span>•</span>
                                        <span>6 hours</span>
                                        <span>•</span>
                                        <span>⭐ 4.9 (1,850)</span>
                                    </div>
                                </Card>
                                <Card className="p-6">
                                    <div className="mb-4">
                                        <div className="grid h-12 w-12 place-items-center rounded-xl bg-amber-500 text-white">
                                            <Layout className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <h3 className="mb-2 font-semibold">
                                        Animation for Beginner
                                    </h3>
                                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                                        Procreate Dreams has transformed my
                                        ability to make animations from my art.
                                        Yet when I first op...
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <span>Beginner</span>
                                        <span>•</span>
                                        <span>6 hours</span>
                                        <span>•</span>
                                        <span>⭐ 4.9 (1,850)</span>
                                    </div>
                                </Card>
                                <Card className="p-6">
                                    <div className="mb-4">
                                        <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-500 text-white">
                                            <Layout className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <h3 className="mb-2 font-semibold">
                                        Common Design Pattern
                                    </h3>
                                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                                        Master your skills in design workshop
                                        facilitation and learn how to promote
                                        collaboration and find...
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <span>Intermediate</span>
                                        <span>•</span>
                                        <span>6 hours</span>
                                        <span>•</span>
                                        <span>⭐ 4.9 (1,850)</span>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>

                    {/* Progress Section */}
                    <div>
                        <Card className="p-6">
                            <div className="mb-6 text-center">
                                <Image
                                    src="/placeholder.svg?height=80&width=80"
                                    width={80}
                                    height={80}
                                    className="mx-auto mb-2 rounded-full"
                                    alt="Profile"
                                />
                                <h3 className="font-semibold">
                                    Alesia Karapova
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Basic Member
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-medium">30</h4>
                                    <select className="border-none bg-transparent text-sm">
                                        <option>This week</option>
                                    </select>
                                </div>
                                <div className="flex h-[200px] items-end gap-2">
                                    {weekData.map((value, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 rounded-t-lg bg-emerald-500/20"
                                            style={{ height: `${value * 4}%` }}
                                        />
                                    ))}
                                </div>
                                <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>Sun 15</span>
                                    <span>Sat 20</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    );
}
