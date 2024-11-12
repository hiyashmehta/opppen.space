"use client";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import { useCallback, useEffect } from "react";
export default function ViewOnlyTextEditor({
    html,
    editable = false,
}: {
    html: string;
    editable?: boolean;
}) {
    const editor = useCreateBlockNote();

    const htmlInputChanged = useCallback(async () => {
        const blocks = await editor.tryParseHTMLToBlocks(html);
        editor.replaceBlocks(editor.document, blocks);
    }, [editor, html]);
    useEffect(() => {
        void htmlInputChanged();
    }, [htmlInputChanged]);

    return (
        <BlockNoteView
            editor={editor}
            theme="light"
            editable={editable}
            className="-p-2 rounded-md border"
        />
    );
}
