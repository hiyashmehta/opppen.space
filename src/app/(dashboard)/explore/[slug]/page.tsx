import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

// This would typically come from a database or API
const companyData = {
    name: "Sisyphus Ventures",
    slug: "sisyphus",
    logo: "S",
    about: "Sisyphus Ventures is a forward-thinking venture capital firm focused on supporting innovative startups in the tech industry.",
    branding: {
        reports: true,
        emails: true,
    },
    social: {
        twitter: "sisyphusvc",
        facebook: "sisyphusvc",
        linkedin: "sisyphusvc",
    },
    members: [
        {
            id: 1,
            name: "Alice Johnson",
            role: "CEO",
            avatar: "/avatars/alice.jpg",
        },
        { id: 2, name: "Bob Smith", role: "CTO", avatar: "/avatars/bob.jpg" },
        {
            id: 3,
            name: "Carol Williams",
            role: "CFO",
            avatar: "/avatars/carol.jpg",
        },
        {
            id: 4,
            name: "David Brown",
            role: "Investment Manager",
            avatar: "/avatars/david.jpg",
        },
        {
            id: 5,
            name: "Eva Martinez",
            role: "Marketing Director",
            avatar: "/avatars/eva.jpg",
        },
    ],
};

export default function CompanyProfileView() {
    // In a real app, you'd fetch the company data based on the slug
    const company = companyData;

    return (
        <div className="flex min-h-screen bg-gray-50/50">
            <div className="ml-16 flex-1">
                <div className="mx-auto max-w-5xl p-6">
                    <div className="mb-8 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-blue-500 text-2xl text-white">
                                <span>{company.logo}</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-semibold">
                                    {company.name}
                                </h1>
                                <p className="text-sm text-muted-foreground">
                                    untitled.com/{company.slug}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Link href="/explore">
                                <Button variant="outline">Back to list</Button>
                            </Link>
                            <Link href={`/explore/${company.slug}/edit`}>
                                <Button>Edit profile</Button>
                            </Link>
                        </div>
                    </div>

                    <Card className="mb-8">
                        <CardContent className="p-6">
                            <div className="grid gap-8">
                                <div>
                                    <h2 className="mb-2 text-lg font-semibold">
                                        About
                                    </h2>
                                    <p className="text-sm text-muted-foreground">
                                        {company.about}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="mb-2 text-lg font-semibold">
                                        Branding
                                    </h2>
                                    <div className="flex gap-4">
                                        <div className="flex items-center gap-2">
                                            <div
                                                className={`h-4 w-4 rounded-full ${company.branding.reports ? "bg-green-500" : "bg-red-500"}`}
                                            />
                                            <span className="text-sm">
                                                Reports
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div
                                                className={`h-4 w-4 rounded-full ${company.branding.emails ? "bg-green-500" : "bg-red-500"}`}
                                            />
                                            <span className="text-sm">
                                                Emails
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="mb-2 text-lg font-semibold">
                                        Social profiles
                                    </h2>
                                    <div className="space-y-2">
                                        <p className="text-sm">
                                            Twitter: @{company.social.twitter}
                                        </p>
                                        <p className="text-sm">
                                            Facebook: {company.social.facebook}
                                        </p>
                                        <p className="text-sm">
                                            LinkedIn: {company.social.linkedin}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <h2 className="mb-4 text-lg font-semibold">
                                Team Members
                            </h2>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {company.members.map((member) => (
                                    <div
                                        key={member.id}
                                        className="flex items-center gap-3 rounded-lg bg-gray-50 p-3"
                                    >
                                        <Avatar>
                                            <AvatarImage
                                                src={member.avatar}
                                                alt={member.name}
                                            />
                                            <AvatarFallback>
                                                {member.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-medium">
                                                {member.name}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {member.role}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
