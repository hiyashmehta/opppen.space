export default async function CommunityChatDetailsPage({
    params,
}: {
    params: Promise<{
        slug: string;
        chatId: string;
    }>;
}) {
    const { slug, chatId } = await params;
    console.log(slug, chatId);
    return (
        <div>
            CommunityChatDetailsPage:
            {slug} - {chatId}
        </div>
    );
}
