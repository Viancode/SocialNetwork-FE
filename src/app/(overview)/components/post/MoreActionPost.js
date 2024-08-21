import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {useState} from "react";
import {Ellipsis} from "lucide-react";
import {Button} from "@/components/ui/button";
import {deletePost} from "@/lib/action";
import {toast} from "sonner";

function MoreActionPost({postInfo}) {
    const [showActions, setShowActions] = useState(false)
    const handleDeletePost = async () => {
        const result = await deletePost(postInfo.id)
        if (result.isSuccessful) {
            toast.success("Post deleted successfully")
        } else {
            toast.error("Error while deleting post")
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button onClick={() => setShowActions(!showActions)} variant="ghost">
                    <Ellipsis/>
                </Button>
            </DropdownMenuTrigger>
            {showActions && (
                <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuItem>
                        <Button
                            className="w-full rounded-md bg-background text-foreground hover:bg-muted hover:text-foreground-muted">
                            Edit
                        </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Button
                            className="mt-2 w-full rounded-md bg-background text-foreground hover:bg-muted hover:text-foreground-muted"
                            onClick={handleDeletePost}
                        >
                            Delete
                        </Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            )}
        </DropdownMenu>
    )
}

export default MoreActionPost;