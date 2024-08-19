import {Button} from "@/components/ui/button";
import {acceptRequestFriend, rejectRequestFriend} from "@/lib/action";
import {toast} from "sonner";

function AcceptAndRejectButton({userId}) {
    async function handleAcceptRequestFriend() {
        const result = await acceptRequestFriend(userId);
        if (result.isSuccessful) {
            toast.success("Accept request friend successfully");
        } else {
            toast.error("Accept request friend failed");
        }
    }

    async function handleRejectRequestFriend() {
        const result = await rejectRequestFriend(userId);
        if (result.isSuccessful) {
            toast.success("Reject request friend successfully");
        } else {
            toast.error("Reject request friend failed");
        }
    }


    return (
        <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleAcceptRequestFriend}>
                Accept
            </Button>
            <Button variant="outline" size="sm" onClick={handleRejectRequestFriend}>
                Reject
            </Button>
        </div>
    )
}

export default AcceptAndRejectButton;