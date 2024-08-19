import RequestFriendItem from "@/app/(overview)/components/friend/RequestFriendItem";

export default function Page() {
    return (
        <div className="grid gap-4 pt-6">
            <RequestFriendItem/>
            <RequestFriendItem/>
            <RequestFriendItem/>
            <RequestFriendItem/>
            <RequestFriendItem/>
        </div>
    )
}