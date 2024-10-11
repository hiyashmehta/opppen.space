import WebsiteHeader from "../header/website";

export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <WebsiteHeader />
            {children}
        </div>
    );
}
