import Image from "next/image";

export default function WebsiteHeader() {
    return (
        <div>
            {/* Logo, Links, Login and Get Started Buttons */}
            <div className="mx-auto my-4 max-w-7xl">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div>
                        <a href="/">
                            <Image
                                src="/next.svg"
                                alt="Logo"
                                width={200}
                                height={50}
                            />
                        </a>
                    </div>
                    {/* Links */}
                    <div className="flex items-center gap-4">
                        <a href="/features">Features</a>
                        <a href="/pricing">Pricing</a>
                        <a href="/contact">Contact</a>
                    </div>{" "}
                    <div className="flex items-center gap-4">
                        <Button></Button>

                        <a href="/login">Login</a>
                        <a href="/register">Get Started</a>
                    </div>
                </div>
                {/* Login and Get Started Buttons */}
            </div>
        </div>
    );
}
