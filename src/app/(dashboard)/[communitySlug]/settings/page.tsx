export default async function CommunitySettings({
    params,
}: {
    params: Promise<{
        communitySlug: string;
    }>;
}) {
    const slug = (await params).communitySlug;

    return <div>CommunitySettings {slug}</div>;
}
