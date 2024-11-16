import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { type Chat } from ".";

export default function ConversationsListItem({ chat }: { chat: Chat }) {
    return (
        <div className="flex items-center gap-4">
            <div>
                <Avatar>
                    <AvatarImage src={chat.userAvatar} />
                </Avatar>
            </div>
            <div>
                <h4 className="text-lg font-bold">{chat.userName}</h4>
                <p className="line-clamp-1 font-medium text-muted-foreground">
                    {chat.message}
                </p>
            </div>
            <div>
                {/* Timestamp */}
                <p className="text-lg text-muted-foreground">
                    {chat.timestamp}
                </p>
            </div>
        </div>
    );
}
