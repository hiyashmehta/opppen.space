import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const companies = [
    { id: 1, name: "Sisyphus Ventures", slug: "sisyphus", logo: "S" },
    { id: 2, name: "Prometheus Tech", slug: "prometheus", logo: "P" },
    { id: 3, name: "Atlas Solutions", slug: "atlas", logo: "A" },
    { id: 4, name: "Olympus Innovations", slug: "olympus", logo: "O" },
    { id: 5, name: "Hermes Logistics", slug: "hermes", logo: "H" },
    { id: 6, name: "Apollo Health", slug: "apollo", logo: "A" },
];

export default function CompaniesListView() {
    return (
        <div className="flex min-h-screen bg-gray-50/50">
            <div className="ml-16 flex-1">
                <div className="mx-auto max-w-7xl p-6">
                    <div className="mb-8 flex items-center justify-between">
                        <h1 className="text-2xl font-semibold">Companies</h1>
                        <Button>Add new company</Button>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {companies.map((company) => (
                            <Card key={company.id}>
                                <CardContent className="p-6">
                                    <div className="mb-4 flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-blue-500 text-xl text-white">
                                            <span>{company.logo}</span>
                                        </div>
                                        <div>
                                            <h2 className="font-semibold">
                                                {company.name}
                                            </h2>
                                            <p className="text-sm text-muted-foreground">
                                                untitled.com/{company.slug}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <Link href={`/explore/${company.slug}`}>
                                            <Button variant="outline" size="sm">
                                                View details
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
