import { useSession } from "next-auth/react";

export default function useCurrentUser() {
    const { data, status } = useSession();

    if (status === "authenticated") {
        return {
            user: data?.user,
            status,
        };
    }
    return {
        user: null,
        status,
    };
}
