import CreateCommunityForm from "@/components/community/create/create-community-form";
import { Card } from "@/components/ui/card";

export default function WelcomePage() {
    return (
        <div className="mx-auto grid h-screen max-w-lg place-items-center px-4">
            <Card className="p-8">
                <h1 className="pb-8 text-center text-3xl font-bold">
                    Welcome to Opppen.Space
                </h1>
                <CreateCommunityForm />
            </Card>
        </div>
    );
}
