"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
};

export default function CompanyProfileEdit() {
    // In a real app, you'd fetch the company data based on the slug
    const company = companyData;

    const [logo, setLogo] = useState<string | null>(null);

    const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogo(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50/50">
            <div className="ml-16 flex-1">
                <div className="mx-auto max-w-5xl p-6">
                    <div className="mb-8 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-blue-500 text-2xl text-white">
                                {logo ? (
                                    <Image
                                        src={logo}
                                        alt="Company logo"
                                        className="h-full w-full object-cover"
                                        width={200}
                                        height={200}
                                        unoptimized
                                    />
                                ) : (
                                    <span>{company.logo}</span>
                                )}
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
                        <Link href={`/company/${company.slug}`}>
                            <Button variant="outline">View profile</Button>
                        </Link>
                    </div>

                    <div className="rounded-lg border bg-white p-6 shadow-sm">
                        <div className="mb-8">
                            <h2 className="mb-1 text-lg font-semibold">
                                Company profile
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                Update your company photo and details here.
                            </p>
                        </div>

                        <div className="grid gap-8">
                            <div>
                                <Label className="mb-1 block text-base font-semibold">
                                    Public profile
                                </Label>
                                <p className="mb-4 text-sm text-muted-foreground">
                                    This will be displayed on your profile.
                                </p>
                                <div className="space-y-4">
                                    <Input defaultValue={company.name} />
                                    <div className="flex">
                                        <div className="rounded-l-md border border-r-0 bg-muted px-3 py-2 text-sm text-muted-foreground">
                                            untitled.com/
                                        </div>
                                        <Input
                                            className="rounded-l-none"
                                            defaultValue={company.slug}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Label className="mb-1 block text-base font-semibold">
                                    Company logo
                                </Label>
                                <p className="mb-4 text-sm text-muted-foreground">
                                    Update your company logo and then choose
                                    where you want it to display.
                                </p>
                                <div className="flex items-start gap-8">
                                    <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-blue-500">
                                        {logo ? (
                                            <>
                                                <Image
                                                    src={logo}
                                                    alt="Uploaded logo"
                                                    className="h-full w-full object-cover"
                                                    width={96}
                                                    height={96}
                                                    unoptimized
                                                />
                                                <button
                                                    onClick={() =>
                                                        setLogo(null)
                                                    }
                                                    className="absolute right-0 top-0 m-1 rounded-full bg-background/80 p-1"
                                                >
                                                    <X className="h-4 w-4" />
                                                </button>
                                            </>
                                        ) : (
                                            <Upload className="h-8 w-8 text-white" />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <Label
                                            htmlFor="logo-upload"
                                            className="inline-flex h-10 cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50"
                                        >
                                            Click to upload
                                        </Label>
                                        <Input
                                            id="logo-upload"
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleLogoUpload}
                                        />
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            or drag and drop
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            SVG, PNG, JPG or GIF (max.
                                            800x400px)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Label className="mb-1 block text-base font-semibold">
                                    Branding
                                </Label>
                                <p className="mb-4 text-sm text-muted-foreground">
                                    Add your logo to reports and emails.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="reports"
                                            defaultChecked={
                                                company.branding.reports
                                            }
                                        />
                                        <div className="grid gap-1.5">
                                            <Label htmlFor="reports">
                                                Reports
                                            </Label>
                                            <p className="text-sm text-muted-foreground">
                                                Include my logo in summary
                                                reports.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="emails"
                                            defaultChecked={
                                                company.branding.emails
                                            }
                                        />
                                        <div className="grid gap-1.5">
                                            <Label htmlFor="emails">
                                                Emails
                                            </Label>
                                            <p className="text-sm text-muted-foreground">
                                                Include my logo in customer
                                                emails.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Label className="mb-1 block text-base font-semibold">
                                    Social profiles
                                </Label>
                                <div className="space-y-4">
                                    <div className="flex">
                                        <div className="rounded-l-md border border-r-0 bg-muted px-3 py-2 text-sm text-muted-foreground">
                                            twitter.com/
                                        </div>
                                        <Input
                                            className="rounded-l-none"
                                            defaultValue={
                                                company.social.twitter
                                            }
                                        />
                                    </div>
                                    <div className="flex">
                                        <div className="rounded-l-md border border-r-0 bg-muted px-3 py-2 text-sm text-muted-foreground">
                                            facebook.com/
                                        </div>
                                        <Input
                                            className="rounded-l-none"
                                            defaultValue={
                                                company.social.facebook
                                            }
                                        />
                                    </div>
                                    <div className="flex">
                                        <div className="rounded-l-md border border-r-0 bg-muted px-3 py-2 text-sm text-muted-foreground">
                                            linkedin.com/company/
                                        </div>
                                        <Input
                                            className="rounded-l-none"
                                            defaultValue={
                                                company.social.linkedin
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end gap-2">
                            <Button variant="outline">Cancel</Button>
                            <Button>Save changes</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
