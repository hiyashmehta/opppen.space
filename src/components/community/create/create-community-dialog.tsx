"use client";
import ResponsiveModal from "@/components/shared/modal/responsive-modal";
import { useCreateCommunityDialog } from "@/lib/hooks/community/use-create-community-dialog";
import CreateCommunityForm from "./create-community-form";

export default function CreateCommunityDialog() {
    const { isOpen, setIsOpen, open, close } = useCreateCommunityDialog();

    return (
        <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
            <div className="p-4">
                <CreateCommunityForm title={`Create a new community`} />
            </div>
        </ResponsiveModal>
    );
}
