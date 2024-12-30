import React from "react";

export default function ChatLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="grid lg:grid-cols-3">
            {/* <div className="col-span-1">
                <ConversationsList />
            </div> */}
            <div className="col-span-3">{children}</div>
        </div>
    );
}
