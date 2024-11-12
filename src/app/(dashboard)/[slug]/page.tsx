export default async function CommunityPage({
    params,
}: {
    params: Promise<{
        slug: string;
    }>;
}) {
    const slug = (await params).slug;

    return <div>CommunityPage: {slug}</div>;
}
