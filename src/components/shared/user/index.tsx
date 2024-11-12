import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { api } from "@/trpc/react";

export default function User({ id }: { id: string }) {
    const { data, isLoading } = api.users.getDetails.useQuery(
        { id },
        {
            enabled: !!id,
        },
    );
    if (!data && isLoading) {
        return <div>Loading...</div>;
    }
    if (data) {
        return (
            <div className="flex items-center gap-4">
                <div>
                    <Avatar>
                        <AvatarImage src={data.image!} alt={data.name!} />
                        <AvatarFallback>{data?.name![0]}</AvatarFallback>
                    </Avatar>
                </div>
                <div>
                    <h1> {data.name}</h1>
                    <p>{data.email}</p>
                </div>
            </div>
        );
    }
    return <div>User</div>;
}
