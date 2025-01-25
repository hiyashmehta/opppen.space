"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Bell, Calendar, ChevronDown, Filter, Search } from "lucide-react";
import { useState } from "react";

interface Client {
    id: string;
    name: string;
    caseRef: string;
    openedAt: string;
    doa: string;
    source: string;
    serviceProvider: string;
    services: string[];
    amount: string;
    avatar: string;
}

export default function ClientDashboard() {
    const [clients] = useState<Client[]>([
        {
            id: "1",
            name: "Theresa Webb",
            caseRef: "CC/80564",
            openedAt: "22/10/2022",
            doa: "22/10/2022",
            source: "Google",
            serviceProvider: "CC/DGM",
            services: ["Salvage", "S&R", "Hire", "VD"],
            amount: "$230.00",
            avatar: "/placeholder.svg",
        },
        {
            id: "2",
            name: "Wade Warren",
            caseRef: "CC/80564",
            openedAt: "22/10/2022",
            doa: "22/10/2022",
            source: "LinkedIn",
            serviceProvider: "CC/DGM",
            services: ["Salvage", "S&R", "Hire", "VD"],
            amount: "$230.00",
            avatar: "/placeholder.svg",
        },
        // Add more clients as needed
    ]);

    return (
        <div className="min-h-screen bg-background">
            <header className="border-b">
                <div className="flex h-16 items-center gap-4 px-4">
                    <div className="flex items-center gap-2 text-xl font-semibold">
                        <div className="h-8 w-8 rounded-full bg-primary" />
                        Carcc
                    </div>
                    <div className="ml-4 flex-1">
                        <div className="relative">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search for clients, vehicles and more"
                                className="w-[300px] pl-8"
                            />
                        </div>
                    </div>
                    <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Calendar className="h-5 w-5" />
                    </Button>
                    <Avatar>
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                </div>
            </header>

            <main className="p-8">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="mb-1 text-2xl font-semibold">Clients</h1>
                        <p className="text-muted-foreground">
                            View all of your Client information.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="outline">Export</Button>
                        <Button>Add New</Button>
                    </div>
                </div>

                <div className="mb-6 flex gap-4">
                    <Button variant="secondary" className="rounded-full">
                        All Clients{" "}
                        <Badge className="ml-2 bg-primary">80</Badge>
                    </Button>
                    <Button variant="ghost" className="rounded-full">
                        Leads{" "}
                        <Badge variant="outline" className="ml-2">
                            40
                        </Badge>
                    </Button>
                    <Button variant="ghost" className="rounded-full">
                        Ongoing{" "}
                        <Badge variant="outline" className="ml-2">
                            20
                        </Badge>
                    </Button>
                    <Button variant="ghost" className="rounded-full">
                        Payment Back{" "}
                        <Badge variant="outline" className="ml-2">
                            25
                        </Badge>
                    </Button>
                    <Button variant="ghost" className="rounded-full">
                        Closed{" "}
                        <Badge variant="outline" className="ml-2">
                            05
                        </Badge>
                    </Button>
                </div>

                <div className="mb-6 flex items-center justify-between">
                    <div className="relative w-[300px]">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search for Clients"
                            className="pl-8"
                        />
                    </div>
                    <div className="flex gap-4">
                        <Button variant="outline" className="gap-2">
                            Jan 6, 2022 - Jan 13, 2022
                            <ChevronDown className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="gap-2">
                            <Filter className="h-4 w-4" />
                            Filters
                        </Button>
                    </div>
                </div>

                <div className="rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[30px]">
                                    <input
                                        type="checkbox"
                                        className="rounded border-muted"
                                    />
                                </TableHead>
                                <TableHead>Client</TableHead>
                                <TableHead>Case Ref</TableHead>
                                <TableHead>Opened at</TableHead>
                                <TableHead>DOA</TableHead>
                                <TableHead>Source</TableHead>
                                <TableHead>Ser. Provider</TableHead>
                                <TableHead>Services</TableHead>
                                <TableHead className="text-right">
                                    Case Ref
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {clients.map((client) => (
                                <TableRow key={client.id}>
                                    <TableCell>
                                        <input
                                            type="checkbox"
                                            className="rounded border-muted"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Avatar className="h-8 w-8">
                                                <AvatarImage
                                                    src={client.avatar}
                                                />
                                                <AvatarFallback>
                                                    {client.name
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className="font-medium">
                                                    {client.name}
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    01796-329869
                                                </div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{client.caseRef}</TableCell>
                                    <TableCell>{client.openedAt}</TableCell>
                                    <TableCell>{client.doa}</TableCell>
                                    <TableCell>{client.source}</TableCell>
                                    <TableCell>
                                        {client.serviceProvider}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex gap-1">
                                            {client.services.map(
                                                (service, index) => (
                                                    <Badge
                                                        key={index}
                                                        variant={
                                                            index === 0
                                                                ? "secondary"
                                                                : "outline"
                                                        }
                                                        className={
                                                            index === 1
                                                                ? "bg-purple-100 text-purple-700 hover:bg-purple-100"
                                                                : index === 2
                                                                  ? "bg-green-100 text-green-700 hover:bg-green-100"
                                                                  : index === 3
                                                                    ? "bg-blue-100 text-blue-700 hover:bg-blue-100"
                                                                    : ""
                                                        }
                                                    >
                                                        {service}
                                                    </Badge>
                                                ),
                                            )}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {client.amount}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <Button variant="outline" className="gap-2">
                        Previous
                    </Button>
                    <div className="flex gap-2">
                        {[1, 2, 3, "...", 8, 9, 10].map((page, i) => (
                            <Button
                                key={i}
                                variant={page === 1 ? "default" : "outline"}
                                className="w-10"
                            >
                                {page}
                            </Button>
                        ))}
                    </div>
                    <Button variant="outline" className="gap-2">
                        Next
                    </Button>
                </div>
            </main>
        </div>
    );
}
