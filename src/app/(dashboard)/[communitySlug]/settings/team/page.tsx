import { Card } from "@/components/ui/card";

export default function CommunityTeamSettings() {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <h4>Team</h4>
                <p>Manage and invite team members to your community.</p>
            </div>
            <Card>invite new members by email address</Card>
            <Card>
                {/* Members table */}
                We will all the team members here in a table
            </Card>
        </div>
    );
}
