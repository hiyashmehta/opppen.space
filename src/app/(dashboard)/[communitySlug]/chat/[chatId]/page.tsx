export default async function CommunityChatDetailsPage({
    params,
}: {
    params: Promise<{
        communitySlug: string;
        chatId: string;
    }>;
}) {
    const { communitySlug, chatId } = await params;
    console.log(communitySlug, chatId);
    return (
        <div>
            CommunityChatDetailsPage:
            {communitySlug} - {chatId}
        </div>
    );
}
