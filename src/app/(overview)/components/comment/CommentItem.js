import React, {useState} from 'react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {formatDistanceToNow} from 'date-fns';
import {getAvatarFallback} from "@/lib/utils";
import {ArrowDown, ArrowUp, FilePen, Heart} from "lucide-react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import TextExpander from "@/app/(overview)/components/ultils/TextExpander";
import {getChildComment} from "@/lib/data";
import {toast} from "sonner";
import {reactComment} from "@/lib/action";
import {useAuth} from "@/app/(overview)/components/context/AuthContext";
import Spinner from "@/app/(overview)/components/ultils/Spinner";

function CommentItem({comment}) {
    const {
        commentId,
        userId,
        username,
        avatar,
        postId,
        parentCommentId,
        numberOfChild,
        content,
        createdAt,
        updatedAt,
        image,
        reactCount,
        isReacted
    } = comment;
    const [childComments, setChildComments] = useState([]);
    const [showChildComments, setShowChildComments] = useState(false);
    const [isReact, setIsReact] = useState(isReacted);
    const [numOfReacts, setNumOfReacts] = useState(reactCount);
    const {currentUserId, loading} = useAuth();


    async function handleClickButton() {
        if (childComments) {
            const result = await getChildComment(commentId, postId);
            if (result.isSuccessful) {
                setShowChildComments(!showChildComments);
                setChildComments(result.data);
            } else {
                toast.error("Error while fetching child comments");
            }
        }
    }

    async function handleReact() {
        if (isReact === true) {
            setNumOfReacts(numOfReacts - 1);
        } else {
            setNumOfReacts(numOfReacts + 1);
        }
        setIsReact(!isReact);
        const result = await reactComment(commentId)
        if (!result.isSuccessful) {
            console.log(result.message)
            toast.error("Error while reacting comment");
        }
    }

    if (loading) {
        return <Spinner/>
    }

    return (
        <div className="bg-card p-4">
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10 border">
                        <AvatarImage src={avatar}/>
                        <AvatarFallback>{getAvatarFallback(username)}</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <Link href={`/home/${userId}`}>
                            <div className="font-semibold">{username}</div>
                        </Link>
                        <time
                            className="text-xs text-muted-foreground">{createdAt !== updatedAt ? "Updated" : ""} {`${formatDistanceToNow(updatedAt)} ago`}</time>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                    {Number(userId) === Number(currentUserId) && (
                        <Button
                            variant="ghost"
                            size="sm"
                            className="p-0 ml-2"
                            // onClick={handleEdit}
                        >
                            <FilePen className="w-5 h-5"/>
                        </Button>
                    )}
                    <Button
                        variant="ghost"
                        size="sm"
                        className="p-0"
                        onClick={handleReact}
                    >
                        <Heart className={`w-5 h-5 ${isReact ? 'fill-current text-black' : ''}`}/>
                    </Button>
                    <span>{numOfReacts}</span>
                </div>

            </div>
            <div className="mt-4 text-sm">
                <p>
                    <TextExpander>{content}</TextExpander>
                </p>
            </div>
            {image && (
                <Image
                    src={image}
                    alt="Comment image"
                    width={800}
                    height={400}
                    className="mt-4 w-full rounded-lg"
                    style={{aspectRatio: "800/400", objectFit: "cover"}}
                />
            )}
            {numberOfChild !== 0 && (
                <Button variant="ghost" className="flex items-center gap-1" onClick={handleClickButton}>
                    {showChildComments === true ? <ArrowUp className="w-5 h-5"/> : <ArrowDown className="w-5 h-5"/>}
                    <span className="leading-relaxed text-muted-foreground">{numberOfChild} reply</span>
                </Button>
            )}
            {showChildComments && (
                <div className="mt-4">
                    {childComments.data.map(childComment => (
                        <CommentItem key={childComment.commentId} comment={childComment}/>
                    ))}
                </div>
            )}

        </div>
    );
}

export default CommentItem;