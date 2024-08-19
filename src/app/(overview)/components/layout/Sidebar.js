import {PlusIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import UserCard from "@/app/(overview)/components/user/UserCard";
import SuggestFriendList from "@/app/(overview)/components/friend/suggest/SuggestFriendList";

function Sidebar() {
    return (
        <>
            <UserCard/>
            <SuggestFriendList className="max-h-24"/>
            <Button variant="outline" size="sm" className="w-full">
                <PlusIcon className="h-4 w-4"/>
                <span>Create Post</span>
            </Button>
        </>
    )
}

export default Sidebar;