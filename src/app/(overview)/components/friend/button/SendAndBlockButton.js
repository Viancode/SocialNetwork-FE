import {Button} from "@/components/ui/button";

function SendAndBlockButton({userId}) {
    return (
        <div className="flex gap-2">
            <Button variant="outline" size="sm">
                Send Request
            </Button>
            <Button variant="outline" size="sm">
                Block
            </Button>
        </div>
    )
}

export default SendAndBlockButton;