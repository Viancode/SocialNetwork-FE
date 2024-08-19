import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {getAvatarFallback} from "@/lib/utils";
import Link from "next/link";


function FriendItem({friendInfo, children}) {
    const {id, avatar, username, email} = friendInfo;
    return (
        <div className="flex items-center justify-between bg-muted p-4 rounded-lg">
            <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                    <AvatarImage src={avatar} alt="User Avatar"/>
                    <AvatarFallback>{getAvatarFallback(username)}</AvatarFallback>
                </Avatar>
                <div>
                    <Link href={`/home/${id}`}>
                        <div className="font-medium">{username}</div>
                    </Link>
                    <div className="text-sm text-muted-foreground">{email}</div>
                </div>
            </div>
            {children}
        </div>
    )
}

export default FriendItem;