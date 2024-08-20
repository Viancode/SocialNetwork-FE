import {Button} from "@/components/ui/button";
import {block} from "@/lib/action";
import {toast} from "sonner";

function BlockButton({userId}) {

    async function handleBlock() {
        const result = await block(userId);
        if (result.isSuccessful) {
            toast.success("Block successfully");
        } else {
            console.log(result.message);
            toast.error("Something went wrong");
        }
    }

    return (
        <Button variant="outline" size="sm" onClick={handleBlock}>
            Block
        </Button>
    )
}

export default BlockButton;