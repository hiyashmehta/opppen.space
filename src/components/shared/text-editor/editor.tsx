"use client";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import { useCallback, useEffect } from "react";
export default function TextEditor({
    html,
    setHtml,
    editable = true,
}: {
    html?: string;
    setHtml: (html: string) => void;
    editable?: boolean;
}) {
    const editor = useCreateBlockNote();

    const onChange = async () => {
        const html = await editor.blocksToHTMLLossy(editor.document);

        setHtml(html);
    };
    const htmlInputChanged = useCallback(async () => {
        const blocks = await editor.tryParseHTMLToBlocks(html!);
        editor.replaceBlocks(editor.document, blocks);
    }, [editor, html]);
    useEffect(() => {
        void htmlInputChanged();
    }, []);

    console.log({ html });
    return (
        <BlockNoteView
            editor={editor}
            theme="light"
            onChange={onChange}
            editable={editable}
            className="max-h-96 min-h-10 overflow-y-auto rounded-md border py-1 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
    );
}
