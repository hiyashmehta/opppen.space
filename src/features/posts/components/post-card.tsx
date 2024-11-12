import User from "@/components/shared/user";
import { Card } from "@/components/ui/card";
import { type Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }: { post: Post }) {
    return (
        <Card>
            {post.image && (
                <div className="h-24 w-full">
                    <Image src={post.image} alt={post.title} fill />
                </div>
            )}
            <div className="p-4">
                <h2 className="text-2xl font-bold hover:text-blue-500 hover:underline">
                    <Link href={`/${post.communityId}/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </h2>
                <p>{post.content}</p>
                <div>
                    <User id={post.authorId} />
                </div>
            </div>{" "}
        </Card>
    );
}
