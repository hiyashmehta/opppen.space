import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import React from "react";

interface ResponsiveModalProps {
    children: React.ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}
export default function ResponsiveModal({
    children,
    open,
    onOpenChange,
}: ResponsiveModalProps) {
    const isMobile = useIsMobile();
    if (!isMobile) {
        return (
            <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogContent className="hide-scrollbar max-h-[85vh] w-full overflow-y-auto border-none p-0 sm:max-w-lg">
                    {children}
                </DialogContent>
            </Dialog>
        );
    }
    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent>
                <div className=" hide-scrollbar max-h-[85vh] overflow-y-auto">
                    {children}
                </div>
            </DrawerContent>
        </Drawer>
    );
}
