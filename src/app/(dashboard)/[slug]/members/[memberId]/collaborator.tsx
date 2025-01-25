import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CollaboratorProps {
    name: string;
    image: string;
}

export function Collaborator({ name, image }: CollaboratorProps) {
    return (
        <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
                <AvatarImage src={image} alt={name} />
                <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm">{name}</span>
        </div>
    );
}
