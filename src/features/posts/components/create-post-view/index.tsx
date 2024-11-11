"use client";
import { Editor } from "@/components/shared/text-editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/trpc/react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
export default function CreatePostView() {
    const [title, setTitle] = useState("");
    const params = useParams();
    const communityId = params.communitySlug as string;

    const [content, setContent] = useState("");
    const { mutate } = api.posts.create.useMutation({
        onSuccess() {
            toast.success("Post created successfully");
        },
    });
    const handleCreatePost = () => {
        mutate({
            title,
            htmlContent: content,
            // jsonContent,
            // jsonContent: JSON.stringify(jsonContent),
            communityId: communityId,
        });
    };
    return (
        <div>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            <Editor setHtml={setContent} />
            <Button onClick={handleCreatePost}>Create Post</Button>
            {/* <div>
                <h4>Preview</h4>
                <Editor markdown={content} editable={false} />
            </div> */}
        </div>
    );
}
