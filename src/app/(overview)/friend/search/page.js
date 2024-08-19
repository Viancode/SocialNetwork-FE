import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import SearchFriendItem from "@/app/(overview)/components/friend/SearchFriendItem";

export default function Page() {
    return (
        <div className="flex flex-col gap-4 pt-6">
            <form className="flex items-center gap-4">
                <Input type="search" placeholder="Search for user..." className="flex-1"/>
                <Button type="submit">Search</Button>
            </form>
            <div className="grid gap-4">
                <SearchFriendItem/>
                <SearchFriendItem/>
                <SearchFriendItem/>
                <SearchFriendItem/>
                <SearchFriendItem/>
            </div>
        </div>
    );
}