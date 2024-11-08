import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function WebsiteHeader() {
    return (
        <div>
            {/* Logo, Links, Login and Get Started Buttons */}
            <div className="mx-auto my-4 max-w-7xl">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div>
                        <Link href="/">
                            <Image
                                src="/next.svg"
                                alt="Logo"
                                width={200}
                                height={50}
                            />
                        </Link>
                    </div>
                    {/* Links */}
                    <div className="flex items-center gap-4">
                        <Link href="/features">Features</Link>
                        <Link href="/pricing">Pricing</Link>
                        <Link href="/contact">Contact</Link>
                    </div>{" "}
                    {/* Login and Get Started Buttons */}
                    <div className="flex items-center gap-4">
                        <Button variant={"outline"} asChild>
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/register">Get Started</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
