import {Button} from "@/components/ui/button";
import {deleteRequestFriend} from "@/lib/action";
import {toast} from "sonner";

function CancelRequestButton({userId}) {
    async function handleCancelRequest() {
        const result = await deleteRequestFriend(userId);
        if (result.isSuccessful) {
            toast.success("Request has been canceled");
        } else {
            toast.error("There was an error, please try again later");
        }
    }

    return (
        <Button variant="outline" size="sm" onClick={handleCancelRequest}>
            Cancel Request
        </Button>
    )
}

export default CancelRequestButton;