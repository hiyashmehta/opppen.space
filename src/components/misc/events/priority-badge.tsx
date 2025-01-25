import { Badge } from "@/components/ui/badge";

type Priority = "High" | "Medium" | "Low";

interface PriorityBadgeProps {
    priority: Priority;
}

export function PriorityBadge({ priority }: PriorityBadgeProps) {
    const colors = {
        High: "bg-[#DCFCE7] text-[#166534] hover:bg-[#DCFCE7]",
        Medium: "bg-purple-100 text-purple-800 hover:bg-purple-100",
        Low: "bg-green-100 text-green-800 hover:bg-green-100",
    };

    return (
        <Badge variant="secondary" className={colors[priority]}>
            {priority} Priority
        </Badge>
    );
}
