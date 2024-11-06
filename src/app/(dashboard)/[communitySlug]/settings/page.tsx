export default function CommunitySettings({
    params,
}: {
    params: { communitySlug: string };
}) {
    const slug = params.communitySlug;
    return <div>CommunitySettings {slug}</div>;
}
