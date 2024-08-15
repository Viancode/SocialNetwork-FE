import {ScrollArea} from "@/components/ui/scroll-area";
import {Textarea} from "@/components/ui/textarea";
import React from "react";
import CloseDialogPage from "@/app/(overview)/components/ultils/CloseDialogPage";
import {getCommentInPost} from "@/lib/data";
import SomethingWentWrong from "@/app/(overview)/components/ultils/SomethingWentWrong";
import CommentList from "@/app/(overview)/components/comment/CommentList";

export default async function Page({searchParams}) {
    const postId = searchParams.postId
    const page = searchParams?.page;
    const result = await getCommentInPost(page, postId);
    let pageMeta = null;
    let comments = null;

    if (result.isSuccessful) {
        pageMeta = result.data.pageMeta;
        comments = result.data.data;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-background p-6 rounded-lg shadow-lg w-full max-w-3xl flex flex-col h-[80vh]">
                <h2 className="text-xl font-bold mb-4">Comments</h2>
                {!result.isSuccessful ? <SomethingWentWrong/> : (
                    <ScrollArea className="flex-grow">
                        {!result.isSuccessful ? <SomethingWentWrong/> :
                            <CommentList initialComments={comments} initialPageMeta={pageMeta}/>
                        }
                    </ScrollArea>
                )}
                <div className="mt-6">
                    <Textarea
                        placeholder="Write a comment..."
                        className="w-full rounded-md border border-muted px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                    <div className="flex justify-end mt-2">
                        <CloseDialogPage>Button</CloseDialogPage>
                    </div>
                </div>
            </div>
        </div>

    )
}

