"use client";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Angry, FilePen, Frown, Heart, MessageCircle, Smile, Tag, ThumbsUp} from "lucide-react";
import {capitalizeFirstLetter, getAvatarFallback} from "@/lib/utils";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {formatDistanceToNow} from "date-fns";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import {useAuth} from "@/app/(overview)/components/auth/AuthContext";
import Spinner from "@/app/(overview)/components/ultils/Spinner";
import {useState} from "react";
import CommentDialog from "@/app/(overview)/components/comment/CommentDialog";
import TextExpander from "@/app/(overview)/components/ultils/TextExpander";

function Post({postInfo}) {
    const [showReactionPage, setShowReactionPage] = useState(false)
    const [showCommentPage, setShowCommentPage] = useState(false)
    const {currentUserId, loading} = useAuth();
    const {
        id,
        avatar,
        username,
        userId,
        content,
        visibility,
        createdAt,
        updatedAt,
        photoResponses,
        numberOfComments,
        numberOfReacts,
        tagUsers
    } = postInfo;

    if (loading) {
        return <Spinner/>
    }

    return (
        <>
            <Card className="w-full">
                <CardHeader>
                    <div className="px-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src={avatar}/>
                                <AvatarFallback>{getAvatarFallback(username)}</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-0.5">
                                <div className="font-semibold">{username}</div>
                                <div className="text-xs text-muted-foreground flex items-center gap-2">
                                    <div className="bg-primary rounded-full px-2 py-0.5 text-primary-foreground">
                                        {capitalizeFirstLetter(visibility)}
                                    </div>
                                    <time>{createdAt !== updatedAt ? "Updated" : ""} {`${formatDistanceToNow(updatedAt)} ago`}</time>
                                </div>
                            </div>
                        </div>
                        {currentUserId === String(userId) && (
                            <Button variant="outline" size="sm">
                                <FilePen className="w-4 h-4 mr-2"/>
                                Edit
                            </Button>
                        )}
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="px-4">
                        <div className="grid gap-4">
                            <TextExpander>{content}</TextExpander>
                            {photoResponses.length > 0 && (
                                <div className="flex justify-center">
                                    <Carousel className="w-full max-w-md">
                                        <CarouselContent>
                                            {photoResponses.map((photo) => (
                                                <CarouselItem key={photo.id}>
                                                    <Image width={1000} height={500} src={photo.url} alt="Post Image"
                                                           className="rounded-lg"/>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious/>
                                        <CarouselNext/>
                                    </Carousel>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 text-sm">
                                <Heart className="w-4 h-4"/>
                                <span>{`${numberOfReacts} reactions`}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm cursor-pointer"
                                 onClick={() => setShowCommentPage(true)}>
                                <MessageCircle className="w-4 h-4"/>
                                <span>{`${numberOfComments} comments`}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 text-sm">
                                <Tag className="w-4 h-4"/>
                                <span>{tagUsers.map(user => {
                                    return <Link key={user.id} href={`/home/${user.id}`}>
                                        {`${user.username} `}
                                    </Link>
                                })}</span>
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <Smile className="w-5 h-5"/>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                        <ThumbsUp className="w-4 h-4 mr-2"/>
                                        Like
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Frown className="w-4 h-4 mr-2"/>
                                        Sad
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Smile className="w-4 h-4 mr-2"/>
                                        Wow
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Angry className="w-4 h-4 mr-2"/>
                                        Angry
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Heart className="w-4 h-4 mr-2"/>
                                        Love
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </CardContent>
            </Card>
            {showCommentPage && <CommentDialog setShowCommentPage={setShowCommentPage} postId={id}/>}
        </>
    )
}

export default Post;