import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import FriendItem from "@/app/(overview)/components/friend/FriendItem";

export default function Page() {
    return (
        <div className="grid gap-4 pt-6">
            <form className="flex items-center gap-4">
                <Input type="search" placeholder="Search for friends..." className="flex-1"/>
                <Button type="submit">Search</Button>
            </form>
            <FriendItem/>
            <FriendItem/>
            <FriendItem/>
            <FriendItem/>
            <FriendItem/>
        </div>
    )
}