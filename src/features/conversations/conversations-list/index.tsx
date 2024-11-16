import ConversationsListItem from "./conversations-list-item";

export default function ConversationsList() {
    return (
        <div>
            {chats.map((chat) => (
                <ConversationsListItem key={chat.id} chat={chat} />
            ))}
        </div>
    );
}

export type Chat = {
    id: number;
    message: string;
    userId: number;
    userName: string;
    userAvatar: string;
    status: "unread" | "read";
    timestamp: string;
};
const chats: Chat[] = [
    {
        id: 1,
        message: "Hi I'm facing an issue with my order",
        userId: 1,
        userName: "John Doe",
        userAvatar: "",
        status: "unread",
        timestamp: "10:00 AM",
    },
];
