import ReceivedFriendItem from "@/app/(overview)/components/friend/ReceivedFriendItem";

export default function Page() {
    return (
        <div className="grid gap-4 pt-6">
            <ReceivedFriendItem/>
            <ReceivedFriendItem/>
            <ReceivedFriendItem/>
            <ReceivedFriendItem/>
            <ReceivedFriendItem/>
        </div>
    )
}