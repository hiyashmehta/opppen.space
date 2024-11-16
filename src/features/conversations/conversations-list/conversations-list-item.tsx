import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type Chat } from ".";

export default function ConversationsListItem({ chat }: { chat: Chat }) {
    return (
        <div className="flex items-center gap-4 rounded-md px-4 py-2 hover:bg-gray-100">
            <div>
                <Avatar>
                    <AvatarImage src={chat.userAvatar} />
                    <AvatarFallback>
                        {chat?.userName[0]?.toUpperCase()}
                    </AvatarFallback>
                </Avatar>
            </div>
            <div className="flex-grow">
                <h4 className="text-lg font-bold">{chat.userName}</h4>
                <p className="line-clamp-1 text-sm font-medium text-muted-foreground">
                    {chat.message}
                </p>
            </div>
            <div>
                {/* Timestamp */}
                <p className="text-sm font-medium text-muted-foreground">
                    {chat.timestamp}
                </p>
            </div>
        </div>
    );
}
