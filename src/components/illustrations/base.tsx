import { cn } from "@/lib/utils";
import Image from "next/image";

export default function BaseIllustration({
    src,
    alt,
    className,
    width,
    height,
}: {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
}) {
    return (
        <Image
            src={
                src ??
                `https://illustrations.popsy.co/white/page-under-construction.svg`
            }
            alt={alt ?? "Base illustration"}
            className={cn("h-96 w-96", className)}
            width={width ?? 400}
            height={height ?? 400}
        />
    );
}
