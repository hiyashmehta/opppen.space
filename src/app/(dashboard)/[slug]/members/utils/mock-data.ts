export interface User {
    id: string;
    externalId: string;
    name: string;
    email: string;
    role: string;
    bio: string;
    avatar: string;
    country: {
        name: string;
        code: string;
    };
    workerType: "Employee" | "Contractor";
    status: "Active" | "Inactive" | "Paused";
    startDate: string;
    teams: string[];
    social?: {
        twitter?: string;
        linkedin?: string;
        github?: string;
    };
}

export function generateMockUsers(count = 10): User[] {
    const countries = [
        { name: "United States", code: "US" },
        { name: "Portugal", code: "PT" },
        { name: "China", code: "CN" },
        { name: "Argentina", code: "AR" },
        { name: "Germany", code: "DE" },
    ];

    const roles = [
        "Data Analyst",
        "Network Administrator",
        "Product Manager",
        "Sales Executive",
        "Supply Chain Analyst",
        "Web Developer",
        "Event Planner",
    ];

    const teams = [
        "Product",
        "Engineering",
        "Design",
        "Marketing",
        "Sales",
        "Support",
        "Management",
    ];

    const statuses: User["status"][] = ["Active", "Inactive", "Paused"];
    const workerTypes: User["workerType"][] = ["Employee", "Contractor"];

    return Array.from({ length: count }, (_, i) => {
        const firstName = `User${i + 1}`;
        const lastName = "Doe";
        return {
            id: `${100 + i}`,
            externalId: `EXT-${800 + i}`,
            name: `${firstName} ${lastName}`,
            email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
            role: roles[i % roles.length] || "Unknown Role",
            avatar: `/placeholder.svg?text=${firstName[0]}${lastName[0]}`,
            country: countries[i % countries.length] || {
                name: "Unknown",
                code: "XX",
            },
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            workerType: workerTypes[i % workerTypes.length] || "Employee",
            status: statuses[i % statuses.length] || "Inactive",
            startDate: new Date(2024, i % 12, i + 1).toLocaleDateString(
                "en-US",
                {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                },
            ),
            teams: Array.from(
                { length: 2 + (i % 3) },
                (_, j) => teams[(i + j) % teams.length],
            ).filter((team): team is string => team !== undefined),
            social: {
                twitter: "#",
                linkedin: "#",
                github: "#",
            },
        };
    });
}
