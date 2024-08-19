import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";

function ReceivedFriendItem() {
    return (
        <div className="flex items-center justify-between bg-muted p-4 rounded-lg">
            <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder-user.jpg" alt="User Avatar"/>
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                    <div className="font-medium">John Doe</div>
                    <div className="text-sm text-muted-foreground">@johndoe</div>
                </div>
            </div>
            <div className="flex gap-2">
                <Button variant="outline" size="sm">
                    Accept
                </Button>
                <Button variant="outline" size="sm">
                    Reject
                </Button>
            </div>
        </div>
    )
}

export default ReceivedFriendItem;