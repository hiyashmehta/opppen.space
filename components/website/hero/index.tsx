import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <div className="grid h-[calc(100vh-80px)] place-items-center">
            <div className="max-w-2xl text-center ">
                {/* heading */}
                <h1 className="mb-8 text-6xl font-bold">
                    Easiest way to
                    <br /> create a community.
                </h1>

                {/* description */}
                <div className="mb-8">
                    Opppen.space makes it easier for you to create a community.
                    You can use our dashboard to manage everything in your
                    community.
                </div>
                {/* action buttons */}
                <div className="flex justify-center gap-4">
                    <Button>Get Started</Button>
                    <Button variant={"outline"}>See our plans</Button>
                </div>
            </div>
        </div>
    );
}
