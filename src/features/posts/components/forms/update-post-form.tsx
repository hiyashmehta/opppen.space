"use client";
import { Editor } from "@/components/shared/text-editor";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { type Post, Post_Status } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { type z } from "zod";
import { createPostSchema, type updatePostSchema } from "../../schema";

export default function UpdatePostForm({ post }: { post: Post }) {
    const router = useRouter();
    const params = useParams();
    const communityId = params.slug as string;
    const utils = api.useUtils();
    const { mutate, isPending } = api.posts.update.useMutation({
        async onSuccess(data) {
            console.log("data", data);
            toast.success("Post updated successfully");
            router.push(`/${communityId}/posts/${data.id}`);
            await utils.posts.getPostDetails.invalidate({
                communityId,
                postId: data.id,
            });
        },
    });
    const form = useForm<z.infer<typeof updatePostSchema>>({
        defaultValues: {
            title: post.title,
            content: post.content!,
            htmlContent: post.htmlContent!,
            // image: "",
            // tags: [],
            status: post.status,
        },

        resolver: zodResolver(createPostSchema),
    });
    const onSubmit = (values: z.infer<typeof createPostSchema>) => {
        console.log("Form submitted");
        console.log({ values });
        const data = {
            ...post,
            ...values,
            communityId,
            slug: post.title.toLowerCase().replace(/ /g, "-"),
        };
        mutate(data);
    };
    console.log({
        values: form.getValues(),
        form,
    });
    return (
        <div className="mx-auto max-w-2xl">
            <h1>Update Post</h1>
            <div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col gap-4"
                    >
                        <FormField
                            name="title"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    {" "}
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Post Title"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="content"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    {" "}
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Post Description"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="grid grid-cols-2 gap-4">
                            {/* <FormField
                                name="tags"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        {" "}
                                        <FormLabel>Tags</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter Tags"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}

                            <FormField
                                name="status"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormLabel>Status</FormLabel>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Post status" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem
                                                    value={Post_Status.DRAFT}
                                                >
                                                    Draft
                                                </SelectItem>
                                                <SelectItem
                                                    value={
                                                        Post_Status.PUBLISHED
                                                    }
                                                >
                                                    Publish
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            name="htmlContent"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    {" "}
                                    <FormLabel>Post Content</FormLabel>
                                    <FormControl>
                                        <Editor
                                            html={field.value}
                                            setHtml={
                                                field.onChange
                                                // (html) =>
                                                // form.setValue(
                                                //     "htmlContent",
                                                //     html,
                                                // )
                                            }
                                        />
                                        {/* <Input
                                            {...field}
                                            placeholder="Post Title"
                                        /> */}
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            onClick={() => onSubmit(form.getValues())}
                            disabled={isPending}
                        >
                            Update Post
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
