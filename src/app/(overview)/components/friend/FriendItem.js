import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";

function FriendItem() {
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
            <Button variant="outline" size="sm">
                Remove Friend
            </Button>
        </div>
    )
}

export default FriendItem;