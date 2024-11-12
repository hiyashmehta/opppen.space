"use client";
import User from "@/components/shared/user";
import { Button } from "@/components/ui/button";
import { api } from "@/trpc/react";
import { type Post } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
import { toast } from "sonner";

export default function PostHeader({ post }: { post: Post }) {
    const router = useRouter();
    const params = useParams();
    const slug = params.slug as string;
    const id = params.id as string;
    const utils = api.useUtils();
    const { mutate, isPending } = api.posts.delete.useMutation({
        async onSuccess(data) {
            console.log("data", data);
            toast.success("Post deleted successfully");
            router.push(`/${slug}/posts`);
            await utils.posts.invalidate();
        },
    });
    const handleBackButton = () => {
        router.push(`/${slug}/posts`);
    };
    const handleEditButton = () => {
        router.push(`/${slug}/posts/${id}/edit`);
    };
    const handleDeleteButton = () => {
        // Delete post
        mutate({
            id: post.id,
            communityId: post.communityId,
        });
    };
    return (
        <div className="flex items-center justify-between gap-4">
            <div>
                <div className="flex items-center gap-4">
                    <Button
                        onClick={handleBackButton}
                        variant={"outline"}
                        size="icon"
                    >
                        <BiArrowBack />
                    </Button>
                    <h1 className="text-3xl font-bold">{post.title}</h1>
                </div>
                <User id={post.authorId} />
            </div>
            <div className="flex items-center gap-4">
                <Button onClick={handleEditButton} disabled={isPending}>
                    Edit
                </Button>
                <Button
                    variant={"destructive"}
                    onClick={handleDeleteButton}
                    disabled={isPending}
                >
                    Delete
                </Button>
                <Button variant={"secondary"} disabled={isPending}>
                    Publish
                </Button>
            </div>
        </div>
    );
}
