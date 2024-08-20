import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import {deleteRequestFriend} from "@/lib/action";

function DeleteRequestButton({userId}) {
    async function handleDeleteRequest() {
        const result = await deleteRequestFriend(userId);
        if (result.isSuccessful) {
            toast.success("Request has been deleted");
        } else {
            console.log(result.message);
            toast.error("There was an error, please try again later");
        }
    }

    return (
        <Button variant="outline" size="sm" onClick={handleDeleteRequest}>
            Delete
        </Button>
    )
}

export default DeleteRequestButton;