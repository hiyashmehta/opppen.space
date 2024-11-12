"use client";
import { api } from "@/trpc/react";
import { useParams } from "next/navigation";
import PostCard from "./components/post-card";

export default function PostsList() {
    const params = useParams();
    const { data, isLoading } = api.posts.getPosts.useQuery(
        {
            communityId: params.slug as string,
        },
        {
            enabled: !!params.slug,
        },
    );
    if (!data && isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="grid grid-cols-4 gap-4">
            {data?.map((post) => <PostCard post={post} key={post.id} />)}
        </div>
    );
}
