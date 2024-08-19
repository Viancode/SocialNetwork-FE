import BlockFriendItem from "@/app/(overview)/components/friend/BlockFriendItem";

export default function Page() {
    return (
        <div className="grid gap-4 pt-6">
            <BlockFriendItem/>
            <BlockFriendItem/>
            <BlockFriendItem/>
            <BlockFriendItem/>
            <BlockFriendItem/>
        </div>
    )
}