import React from 'react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {formatDistanceToNow} from 'date-fns';
import {getAvatarFallback} from "@/lib/utils";
import {ArrowDown, Heart, Reply} from "lucide-react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import TextExpander from "@/app/(overview)/components/ultils/TextExpander";

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
        reactCount
    } = comment;


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
                    <Heart className="w-5 h-5"/>
                    <span>{reactCount}</span>
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
                <Button variant="ghost" className="flex items-center gap-1">
                    <ArrowDown className="w-5 h-5"/>
                    <span className="leading-relaxed text-muted-foreground">{numberOfChild} reply</span>
                </Button>
            )}

        </div>
    );
}

export default CommentItem;