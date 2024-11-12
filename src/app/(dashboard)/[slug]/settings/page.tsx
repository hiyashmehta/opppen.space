import CreateCommunityForm from "@/components/community/create/create-community-form";

export default async function CommunitySettings({
    params,
}: {
    params: Promise<{
        slug: string;
    }>;
}) {
    const slug = (await params).slug;

    return (
        <div>
            <CreateCommunityForm />
        </div>
    );
}
