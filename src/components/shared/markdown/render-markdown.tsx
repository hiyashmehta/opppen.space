/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// @ts-nocheck - This is a known issue with the `as` prop.

import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

export default function RenderMarkdown({ markdown }: { markdown: string }) {
    return (
        <Markdown
            remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
            className={"markdown-content"}
            components={{
                code(props) {
                    const { children, className, ...rest } = props;
                    const match = /language-(\w+)/.exec(className || "");
                    return match ? (
                        <SyntaxHighlighter
                            {...rest}
                            PreTag="div"
                            language={match[1]}
                            style={vscDarkPlus}
                            showLineNumbers
                            showInlineLineNumbers
                        >
                            {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                    ) : (
                        <code {...rest} className={className}>
                            {children}
                        </code>
                    );
                },
            }}
        >
            {markdown}
        </Markdown>
    );
}
