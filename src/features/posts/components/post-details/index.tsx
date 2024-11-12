"use client";
import ViewOnlyTextEditor from "@/components/shared/text-editor/view-only-editor";
import { api } from "@/trpc/react";
import { useParams } from "next/navigation";
import PostHeader from "./header";

export default function PostDetails() {
    const params = useParams();
    const slug = params.slug as string;
    const id = params.id as string;
    const { data, isLoading } = api.posts.getPostDetails.useQuery(
        {
            communityId: slug,
            postId: id,
        },
        {
            enabled: !!slug && !!id,
        },
    );
    if (!data && isLoading) {
        return <div>Loading...</div>;
    }
    if (data)
        return (
            <div>
                <PostHeader post={data} />
                {data.htmlContent && (
                    <div className="mx-auto max-w-5xl">
                        <ViewOnlyTextEditor html={data.htmlContent} />
                    </div>
                )}{" "}
            </div>
        );
}
