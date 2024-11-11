"use client";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
export default function TextEditor({
    setHtml,
    editable = true,
}: {
    setHtml: (html: string) => void;
    editable?: boolean;
}) {
    const editor = useCreateBlockNote({});

    const onChange = async () => {
        const html = await editor.blocksToHTMLLossy(editor.document);

        setHtml(html);
    };

    return (
        <BlockNoteView
            editor={editor}
            theme="light"
            onChange={onChange}
            editable={editable}
        />
    );
}
