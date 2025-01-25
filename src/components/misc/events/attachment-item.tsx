import { Button } from "@/components/ui/button";
import { DownloadIcon, EyeIcon, FileIcon } from "lucide-react";

interface AttachmentItemProps {
    name: string;
    time: string;
    date: string;
}

export function AttachmentItem({ name, time, date }: AttachmentItemProps) {
    return (
        <div className="flex items-center justify-between rounded-lg p-2 hover:bg-muted/50">
            <div className="flex items-center gap-3">
                <div className="rounded-lg bg-muted p-2">
                    <FileIcon className="h-4 w-4" />
                </div>
                <div>
                    <p className="text-sm font-medium">{name}</p>
                    <p className="text-xs text-muted-foreground">
                        {time} {date}
                    </p>
                </div>
            </div>
            <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                    <EyeIcon className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                    <DownloadIcon className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
