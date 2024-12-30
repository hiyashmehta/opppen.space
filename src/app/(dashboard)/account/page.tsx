"use client";

import { CreditCard, Link, MoreHorizontal, Plus } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function SettingsPage() {
    return (
        <div className="min-h-screen bg-background p-6">
            <div className="mx-auto max-w-5xl space-y-6">
                <div className="space-y-0.5">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Settings
                    </h2>
                    <p className="text-muted-foreground">
                        Customize settings, email preferences, and web
                        appearance.
                    </p>
                </div>

                <Tabs defaultValue="profile" className="space-y-6">
                    <TabsList className="bg-muted/50 p-1">
                        <TabsTrigger value="profile" className="flex-1">
                            Profile
                        </TabsTrigger>
                        <TabsTrigger value="appearance" className="flex-1">
                            Appearance
                        </TabsTrigger>
                        <TabsTrigger value="account" className="flex-1">
                            Account
                        </TabsTrigger>
                        <TabsTrigger value="billing" className="flex-1">
                            Billing
                        </TabsTrigger>
                        <TabsTrigger value="team" className="flex-1">
                            Team
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="profile" className="space-y-6">
                        <div className="space-y-1">
                            <h3 className="text-lg font-medium">Profile</h3>
                            <p className="text-sm text-muted-foreground">
                                This displays your public profile on the site.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-x-4">
                                <Avatar className="h-16 w-16">
                                    <AvatarImage src="/placeholder.svg" />
                                    <AvatarFallback>KM</AvatarFallback>
                                </Avatar>
                                <div className="space-y-0.5">
                                    <h4 className="font-medium">Kate Moore</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Customer Support
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        kate.moore@acme.com
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        id="title"
                                        placeholder="e.g Customer Support"
                                        defaultValue="Customer Support"
                                        className="max-w-md"
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        Set your current role.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="location">Location</Label>
                                    <Input
                                        id="location"
                                        placeholder="e.g Buenos Aires, Argentina"
                                        defaultValue="Buenos Aires, Argentina"
                                        className="max-w-md"
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        Set your current location.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="bio">Biography</Label>
                                    <Textarea
                                        id="bio"
                                        placeholder="Tell us about yourself"
                                        defaultValue="Kate Moore - Acme.com Support Specialist. Passionate about solving tech issues, loves hiking and volunteering."
                                        className="min-h-[100px]"
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        Specify your present whereabouts.
                                    </p>
                                </div>
                            </div>

                            <Button>Update Profile</Button>
                        </div>
                    </TabsContent>

                    <TabsContent value="appearance" className="space-y-6">
                        <div className="space-y-1">
                            <h3 className="text-lg font-medium">Theme</h3>
                            <p className="text-sm text-muted-foreground">
                                Change the appearance of the web.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <div className="grid grid-cols-2 gap-4">
                                <Card className="p-4">
                                    <div className="space-y-2">
                                        <div className="rounded-md bg-white p-2">
                                            <div className="space-y-2">
                                                <div className="h-2 w-[80%] rounded bg-gray-100" />
                                                <div className="h-2 w-[60%] rounded bg-gray-100" />
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium">
                                                Light
                                            </span>
                                            <Switch checked={false} />
                                        </div>
                                    </div>
                                </Card>
                                <Card className="bg-zinc-950 p-4">
                                    <div className="space-y-2">
                                        <div className="rounded-md bg-zinc-900 p-2">
                                            <div className="space-y-2">
                                                <div className="h-2 w-[80%] rounded bg-zinc-800" />
                                                <div className="h-2 w-[60%] rounded bg-zinc-800" />
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-white">
                                                Dark
                                            </span>
                                            <Switch checked={true} />
                                        </div>
                                    </div>
                                </Card>
                            </div>

                            <div className="space-y-2">
                                <Label>Font size</Label>
                                <Select defaultValue="large">
                                    <SelectTrigger className="w-40">
                                        <SelectValue placeholder="Select size" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="small">
                                            Small
                                        </SelectItem>
                                        <SelectItem value="medium">
                                            Medium
                                        </SelectItem>
                                        <SelectItem value="large">
                                            Large
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label>Translucent UI</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Use transparency in UI elements like
                                            the sidebar and modal dialogs.
                                        </p>
                                    </div>
                                    <Switch checked={true} />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label>Use pointer cursor</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Change the cursor to a pointer when
                                            hovering
                                        </p>
                                    </div>
                                    <Switch checked={true} />
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="account" className="space-y-6">
                        <div className="space-y-1">
                            <h3 className="text-lg font-medium">Account</h3>
                            <p className="text-sm text-muted-foreground">
                                Update your account settings.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="full-name">Full name</Label>
                                <Input
                                    id="full-name"
                                    placeholder="e.g Kate Moore"
                                    defaultValue="Kate Moore"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Name to be used for emails.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    id="username"
                                    placeholder="username"
                                    defaultValue="kate.moore"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Nickname or first name.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="e.g kate.moore@acme.com"
                                    defaultValue="kate.moore@acme.com"
                                />
                                <p className="text-sm text-muted-foreground">
                                    The email address associated with your
                                    account.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="timezone">Timezone</Label>
                                <Select defaultValue="utc-3">
                                    <SelectTrigger id="timezone">
                                        <SelectValue placeholder="Select timezone" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="utc-3">
                                            Coordinated Universal Time (UTC-3)
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <p className="text-sm text-muted-foreground">
                                    Set your current timezone.
                                </p>
                            </div>

                            <Button>Update Account</Button>
                        </div>
                    </TabsContent>

                    <TabsContent value="billing" className="space-y-6">
                        <div className="space-y-1">
                            <h3 className="text-lg font-medium">Billing</h3>
                            <p className="text-sm text-muted-foreground">
                                Manage your billing information and
                                subscription.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between rounded-lg border p-4">
                                <div className="flex items-center space-x-4">
                                    <CreditCard className="h-6 w-6" />
                                    <div className="space-y-0.5">
                                        <p className="text-sm font-medium">
                                            Payment method
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            MasterCard credit card ending in
                                            ***3456
                                        </p>
                                    </div>
                                </div>
                                <Button variant="outline" size="sm">
                                    Update
                                </Button>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <h4 className="text-sm font-medium">
                                        Current Plan
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        Your free trial ends in 8 days.
                                    </p>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <Card className="relative border-2 border-primary p-4">
                                        <div className="space-y-4">
                                            <div className="space-y-1">
                                                <h4 className="text-lg font-medium">
                                                    Pro Monthly
                                                </h4>
                                                <div className="text-3xl font-bold">
                                                    $12
                                                    <span className="text-sm font-normal text-muted-foreground">
                                                        /per month
                                                    </span>
                                                </div>
                                            </div>
                                            <ul className="space-y-2 text-sm">
                                                <li>• Unlimited users</li>
                                                <li>• All features</li>
                                                <li>
                                                    • Support via email and chat
                                                </li>
                                                <li>
                                                    • Billed monthly, cancel any
                                                    time
                                                </li>
                                            </ul>
                                        </div>
                                    </Card>
                                    <Card className="p-4">
                                        <div className="space-y-4">
                                            <div className="space-y-1">
                                                <h4 className="text-lg font-medium">
                                                    Pro Yearly
                                                </h4>
                                                <div className="text-3xl font-bold">
                                                    $72
                                                    <span className="text-sm font-normal text-muted-foreground">
                                                        /per year
                                                    </span>
                                                </div>
                                            </div>
                                            <ul className="space-y-2 text-sm">
                                                <li>• Unlimited users</li>
                                                <li>• All features</li>
                                                <li>
                                                    • Support via email and chat
                                                </li>
                                                <li>
                                                    • Billed monthly, cancel any
                                                    time
                                                </li>
                                            </ul>
                                        </div>
                                    </Card>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Billing Address</Label>
                                    <p className="text-sm text-muted-foreground">
                                        If you&apos;d like to add a postal
                                        address to every invoice, enter it here.
                                    </p>
                                </div>

                                <div className="grid gap-4">
                                    <Input placeholder="Address Line 1" />
                                    <Input placeholder="Address Line 2" />
                                    <Input placeholder="City" />
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Buenos Aires" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="buenos-aires">
                                                    Buenos Aires
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Input placeholder="Postal Code" />
                                    </div>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Argentina" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="argentina">
                                                Argentina
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <Button>Save</Button>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="team" className="space-y-6">
                        <div className="space-y-1">
                            <h3 className="text-lg font-medium">Team</h3>
                            <p className="text-sm text-muted-foreground">
                                Manage and invite Team Members.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="rounded-lg border p-4">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-sm font-medium">
                                            Invite new members by email address
                                        </h4>
                                        <Button variant="outline" size="sm">
                                            <Link className="mr-2 h-4 w-4" />
                                            Invite Link
                                        </Button>
                                    </div>

                                    <div className="grid gap-4">
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <Input placeholder="e.g kate.moore@acme.com" />
                                            <Select defaultValue="member">
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select role" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="member">
                                                        Member
                                                    </SelectItem>
                                                    <SelectItem value="admin">
                                                        Admin
                                                    </SelectItem>
                                                    <SelectItem value="owner">
                                                        Owner
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <Button variant="outline" size="sm">
                                                <Plus className="mr-2 h-4 w-4" />
                                                Add more
                                            </Button>
                                            <Button>Send Invite</Button>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2 text-sm">
                                        <p className="text-muted-foreground">
                                            Learn more about
                                        </p>
                                        <Button
                                            variant="link"
                                            className="h-auto p-0"
                                        >
                                            Team Members
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Input
                                        placeholder="Search by name..."
                                        className="flex-1"
                                        // prefix={
                                        //     <Search className="h-4 w-4 text-muted-foreground" />
                                        // }
                                    />
                                    <Select defaultValue="all">
                                        <SelectTrigger className="w-40">
                                            <SelectValue placeholder="All Team Roles" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">
                                                All Team Roles
                                            </SelectItem>
                                            <SelectItem value="admin">
                                                Admin
                                            </SelectItem>
                                            <SelectItem value="member">
                                                Member
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="rounded-lg border">
                                    <div className="border-b p-4">
                                        <div className="flex items-center gap-4">
                                            <Button
                                                variant="ghost"
                                                className="h-auto p-0 text-base font-medium"
                                            >
                                                Members
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                className="h-auto p-0 text-base font-medium text-muted-foreground"
                                            >
                                                Pending Invitations
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="divide-y">
                                        <div className="flex items-center justify-between p-4">
                                            <div className="flex items-center space-x-4">
                                                <Avatar>
                                                    <AvatarImage src="/placeholder.svg" />
                                                    <AvatarFallback>
                                                        TR
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="space-y-0.5">
                                                    <p className="text-sm font-medium">
                                                        Tony Reichert
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        tony.reichert@acme.com
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Badge>Owner</Badge>
                                                <Badge variant="default">
                                                    Active
                                                </Badge>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        asChild
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-8 w-8"
                                                        >
                                                            <MoreHorizontal className="h-4 w-4" />
                                                            <span className="sr-only">
                                                                Open menu
                                                            </span>
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuItem>
                                                            View profile
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            Remove member
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between p-4">
                                            <div className="flex items-center space-x-4">
                                                <Avatar>
                                                    <AvatarImage src="/placeholder.svg" />
                                                    <AvatarFallback>
                                                        ZL
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="space-y-0.5">
                                                    <p className="text-sm font-medium">
                                                        Zoey Lang
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        zoey.lang@acme.com
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Badge variant="secondary">
                                                    Member
                                                </Badge>
                                                <Badge variant="destructive">
                                                    Pending
                                                </Badge>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        asChild
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-8 w-8"
                                                        >
                                                            <MoreHorizontal className="h-4 w-4" />
                                                            <span className="sr-only">
                                                                Open menu
                                                            </span>
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuItem>
                                                            View profile
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            Remove member
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
