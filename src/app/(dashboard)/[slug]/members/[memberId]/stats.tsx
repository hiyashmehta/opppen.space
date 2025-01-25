interface StatsProps {
    followers: number;
    following: number;
}

export function Stats({ followers, following }: StatsProps) {
    return (
        <div className="my-4 flex items-center justify-center gap-8">
            <div className="text-center">
                <div className="font-semibold">{followers}</div>
                <div className="text-sm text-muted-foreground">Followers</div>
            </div>
            <div className="text-center">
                <div className="font-semibold">{following}</div>
                <div className="text-sm text-muted-foreground">Following</div>
            </div>
        </div>
    );
}
