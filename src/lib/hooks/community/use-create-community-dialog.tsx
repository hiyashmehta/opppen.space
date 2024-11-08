import { parseAsBoolean, useQueryState } from "nuqs";

export function useCreateCommunityDialog() {
    const [isOpen, setIsOpen] = useQueryState(
        "create-community",
        parseAsBoolean.withDefault(false).withOptions({
            clearOnDefault: true,
        }),
    );
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return { isOpen, open, close, setIsOpen };
}
