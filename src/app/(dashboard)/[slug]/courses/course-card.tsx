import { Card } from "@/components/ui/card";
import { Layout } from "lucide-react";

interface CourseCardProps {
    title: string;
    description: string;
    icon: string;
    iconColor: string;
    level: string;
    duration: string;
    rating: number;
    ratingCount: number;
}

export function CourseCard({
    title,
    description,
    //   icon,
    iconColor,
    level,
    duration,
    rating,
    ratingCount,
}: CourseCardProps) {
    return (
        <Card className="p-6">
            <div className="mb-4">
                <div
                    className={`h-12 w-12 rounded-xl ${iconColor} grid place-items-center text-white`}
                >
                    <Layout className="h-6 w-6" />
                </div>
            </div>
            <h3 className="mb-2 font-semibold">{title}</h3>
            <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                {description}
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{level}</span>
                <span>•</span>
                <span>{duration}</span>
                <span>•</span>
                <span>
                    ⭐ {rating.toFixed(1)} ({ratingCount.toLocaleString()})
                </span>
            </div>
        </Card>
    );
}
