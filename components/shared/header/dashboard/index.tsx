import Image from "next/image";

export default function DashboardHeader() {
    return (
        <div className="px-8 py-4">
            <div className="flex items-center justify-between gap-4">
                <Image src="/next.svg" alt="logo" width={200} height={50} />
                <div>
                    {/* Links */}
                    <div>Community Name and other details</div>
                    {/*  */}
                    {/* Search bar */}
                    <div>{/* Search bar */}</div>
                    {/* Menu icons */}
                    <div>
                        {/* Notifications */}
                        {/* User profile */}
                    </div>
                </div>
            </div>
        </div>
    );
}
