"use client";
import User from "@/components/shared/user";
import { Button } from "@/components/ui/button";
import { type Post } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

export default function PostHeader({ post }: { post: Post }) {
    const router = useRouter();
    const params = useParams();
    const slug = params.communitySlug as string;
    const handleBackButton = () => {
        router.push(`/${slug}/posts`);
    };
    return (
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
    );
}
