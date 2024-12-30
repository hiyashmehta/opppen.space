import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LayoutGrid, List } from "lucide-react";

interface ViewToggleProps {
    view: "grid" | "table";
    onViewChange: (view: "grid" | "table") => void;
}

export function ViewToggle({ view, onViewChange }: ViewToggleProps) {
    return (
        <ToggleGroup
            type="single"
            value={view}
            onValueChange={(v) => v && onViewChange(v as "grid" | "table")}
            className="border dark:bg-zinc-900/50"
        >
            <ToggleGroupItem
                value="grid"
                aria-label="Grid view"
                className="text-zinc-400 data-[state=on]:bg-zinc-800 data-[state=on]:text-zinc-100"
            >
                <LayoutGrid className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
                value="table"
                aria-label="Table view"
                className="text-zinc-400 data-[state=on]:bg-zinc-800 data-[state=on]:text-zinc-100"
            >
                <List className="h-4 w-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    );
}
