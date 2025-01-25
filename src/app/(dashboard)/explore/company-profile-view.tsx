import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CompanyProfileView() {
    return (
        <div className="flex min-h-screen bg-gray-50/50">
            <div className="ml-16 flex-1">
                <div className="mx-auto max-w-5xl p-6">
                    <div className="mb-8 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-blue-500 text-2xl text-white">
                                <span>S</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-semibold">
                                    Sisyphus Ventures
                                </h1>
                                <p className="text-sm text-muted-foreground">
                                    untitled.com/sisyphus
                                </p>
                            </div>
                        </div>
                        <Button>Edit profile</Button>
                    </div>

                    <Card>
                        <CardContent className="p-6">
                            <div className="grid gap-8">
                                <div>
                                    <h2 className="mb-2 text-lg font-semibold">
                                        About
                                    </h2>
                                    <p className="text-sm text-muted-foreground">
                                        Sisyphus Ventures is a forward-thinking
                                        venture capital firm focused on
                                        supporting innovative startups in the
                                        tech industry.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="mb-2 text-lg font-semibold">
                                        Branding
                                    </h2>
                                    <div className="flex gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="h-4 w-4 rounded-full bg-green-500" />
                                            <span className="text-sm">
                                                Reports
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="h-4 w-4 rounded-full bg-green-500" />
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
                                            Twitter: @sisyphusvc
                                        </p>
                                        <p className="text-sm">
                                            Facebook: sisyphusvc
                                        </p>
                                        <p className="text-sm">
                                            LinkedIn: sisyphusvc
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
