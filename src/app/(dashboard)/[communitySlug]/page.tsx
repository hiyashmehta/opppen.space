export default function CommunityPage({
    params,
}: {
    params: {
        communitySlug: string;
    };
}) {
    const slug = params.communitySlug;
    return <div>CommunityPage: {slug}</div>;
}
