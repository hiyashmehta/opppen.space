import CreateCommunityForm from "@/components/community/create/create-community-form";

export default async function CommunitySettings({
    params,
}: {
    params: Promise<{
        communitySlug: string;
    }>;
}) {
    const slug = (await params).communitySlug;

    return (
        <div>
            <CreateCommunityForm />
        </div>
    );
}
