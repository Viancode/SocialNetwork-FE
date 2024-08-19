import {Button} from "@/components/ui/button";
import {unFriend} from "@/lib/action";
import {toast} from "sonner";

function UnFriendButton({userId}) {
    async function handleUnFriend() {
        const result = await unFriend(userId);
        if (result.isSuccessful) {
            toast.success("Unfriend successfully");
        } else {
            toast.error("Unfriend failed");
        }
    }

    return (
        <Button variant="outline" size="sm" onClick={handleUnFriend}>
            Unfriend
        </Button>
    )
}

export default UnFriendButton;