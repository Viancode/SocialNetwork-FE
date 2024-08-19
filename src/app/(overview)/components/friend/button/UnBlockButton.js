import {Button} from "@/components/ui/button";
import {unBlock} from "@/lib/action";
import {toast} from "sonner";

function UnBlockButton({userId}) {

    async function handleUnBlock() {
        const result = await unBlock(userId);
        if (result.isSuccessful) {
            toast.success("Unblock successfully");
        } else {
            console.log(result.message);
            toast.error("Something went wrong");
        }
    }

    return (
        <Button variant="outline" size="sm" onClick={handleUnBlock}>
            Unblock
        </Button>
    )
}

export default UnBlockButton;