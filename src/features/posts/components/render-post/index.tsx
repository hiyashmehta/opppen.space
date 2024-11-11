"use client";
import { Editor } from "@/components/shared/text-editor";
import ViewOnlyTextEditor from "@/components/shared/text-editor/view-only-editor";
import { useState } from "react";

export default function RenderPost() {
    const [markdown, setMarkdown] = useState("");
    return (
        <div>
            RenderPost
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h4>Editor</h4>
                </div>{" "}
                <div className="hidden lg:block">
                    <h4>Preview</h4>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="rounded-md border">
                    <Editor setHtml={setMarkdown} />
                </div>
                <div className="hidden rounded-md border lg:flex">
                    {/* <RenderMarkdown markdown={markdown} /> */}
                    <ViewOnlyTextEditor html={markdown} />
                </div>
            </div>
        </div>
    );
}
