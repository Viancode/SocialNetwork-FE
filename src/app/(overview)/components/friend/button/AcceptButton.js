import {Button} from "@/components/ui/button";
import {acceptRequestFriend} from "@/lib/action";
import {toast} from "sonner";

function AcceptButton({userId}) {
    async function handleAcceptRequestFriend() {
        const result = await acceptRequestFriend(userId);
        if (result.isSuccessful) {
            toast.success("Accept request friend successfully");
        } else {
            toast.error("Accept request friend failed");
        }
    }

    return (
        <Button variant="outline" size="sm" onClick={handleAcceptRequestFriend}>
            Accept
        </Button>
    )
}

export default AcceptButton;