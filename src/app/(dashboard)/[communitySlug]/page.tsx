export default async function CommunityPage({
    params,
}: {
    params: Promise<{
        communitySlug: string;
    }>;
}) {
    const slug = (await params).communitySlug;

    return <div>CommunityPage: {slug}</div>;
}
