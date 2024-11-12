import UpdatePostForm from "@/features/posts/components/forms/update-post-form";
import { api } from "@/trpc/server";
import { Suspense } from "react";

export default async function EditPostPage({
    params,
}: {
    params: Promise<{ id: string; slug: string }>;
}) {
    const { id, slug } = await params;
    const data = await api.posts.getPostDetails({
        communityId: slug,
        postId: id,
    });
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <UpdatePostForm post={data!} />
            </Suspense>
        </div>
    );
}
