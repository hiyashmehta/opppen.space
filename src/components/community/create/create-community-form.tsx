"use client";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const createCommunitySchema = z.object({
    name: z.string().min(3),
    slug: z.string(),
    description: z.string(),
});
export default function CreateCommunityForm({ title }: { title?: string }) {
    const router = useRouter();
    const { mutate, isPending } = api.community.createCommunity.useMutation({
        onSuccess(data) {
            console.log("data", data);
            toast.success("Community created successfully");
            router.push(`/${data.id}`);
        },
    });
    const form = useForm<z.infer<typeof createCommunitySchema>>({
        defaultValues: {
            name: "",
            slug: "",
            description: "",
        },
        resolver: zodResolver(createCommunitySchema),
    });
    const onSubmit = (values: z.infer<typeof createCommunitySchema>) => {
        console.log("submit", values);
        mutate(values);
    };

    return (
        <div>
            <h3 className="text-lg font-medium">
                {title ?? `Create your community to get started`}
            </h3>

            <div className="my-4">
                <Form {...form}>
                    <form
                        className="space-y-4"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <FormField
                            name="name"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Community Name"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="slug"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Community Slug"
                                        />
                                    </FormControl>{" "}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="description"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            placeholder="Community Description"
                                        />
                                    </FormControl>{" "}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            className="w-full"
                            type="submit"
                            disabled={isPending}
                        >
                            Create Community
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
