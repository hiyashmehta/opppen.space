import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { CourseCard } from "./course-card";

const courses = [
    {
        title: "Design Workshop Facilitation",
        description:
            "Master your skills in design workshop facilitation and learn how to promote collaboration and find innovative solutions.",
        icon: "Layout",
        iconColor: "bg-teal-500",
        level: "Advanced",
        duration: "6 hours",
        rating: 4.9,
        ratingCount: 1850,
    },
    {
        title: "Animation for Beginner",
        description:
            "Learn the fundamentals of animation and bring your ideas to life with engaging motion graphics and character animations.",
        icon: "Layout",
        iconColor: "bg-amber-500",
        level: "Beginner",
        duration: "6 hours",
        rating: 4.9,
        ratingCount: 1850,
    },
    {
        title: "Common Design Pattern",
        description:
            "Explore and master common design patterns to create more efficient, scalable, and maintainable software solutions.",
        icon: "Layout",
        iconColor: "bg-blue-500",
        level: "Intermediate",
        duration: "6 hours",
        rating: 4.9,
        ratingCount: 1850,
    },
    {
        title: "UX Research Fundamentals",
        description:
            "Learn essential UX research methods and techniques to create user-centered designs and improve product usability.",
        icon: "Layout",
        iconColor: "bg-violet-500",
        level: "Beginner",
        duration: "8 hours",
        rating: 4.8,
        ratingCount: 1650,
    },
    {
        title: "Advanced CSS Techniques",
        description:
            "Master advanced CSS techniques including flexbox, grid, and responsive design to create stunning web layouts.",
        icon: "Layout",
        iconColor: "bg-emerald-500",
        level: "Advanced",
        duration: "10 hours",
        rating: 4.7,
        ratingCount: 2100,
    },
    {
        title: "JavaScript for Designers",
        description:
            "Learn JavaScript basics and how to enhance your designs with interactive elements and animations.",
        icon: "Layout",
        iconColor: "bg-yellow-500",
        level: "Intermediate",
        duration: "12 hours",
        rating: 4.6,
        ratingCount: 1950,
    },
];

export default function CoursesPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Main Content */}
            <div>
                {/* Header */}
                {/* <header className="flex h-16 items-center justify-between border-b bg-white px-6">
                    <h1 className="text-lg font-semibold">Courses</h1>
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
                <main className="p-6">
                    <div className="mb-6 flex items-center justify-between">
                        <div className="space-y-1">
                            <h2 className="text-2xl font-semibold">
                                All Courses
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                Explore our wide range of courses
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Select defaultValue="all">
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">
                                        All Categories
                                    </SelectItem>
                                    <SelectItem value="design">
                                        Design
                                    </SelectItem>
                                    <SelectItem value="development">
                                        Development
                                    </SelectItem>
                                    <SelectItem value="marketing">
                                        Marketing
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <Select defaultValue="newest">
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="newest">
                                        Newest
                                    </SelectItem>
                                    <SelectItem value="popular">
                                        Most Popular
                                    </SelectItem>
                                    <SelectItem value="price-low">
                                        Price: Low to High
                                    </SelectItem>
                                    <SelectItem value="price-high">
                                        Price: High to Low
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="mb-6">
                        <Input
                            type="search"
                            placeholder="Search courses..."
                            className="max-w-sm"
                        />
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {courses.map((course, index) => (
                            <CourseCard key={index} {...course} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
