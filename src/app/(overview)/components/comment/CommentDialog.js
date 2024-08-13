"use client";
import React, {useState, useEffect} from 'react';
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import CommentItem from "@/app/(overview)/components/comment/CommentItem";
import {ScrollArea} from "@/components/ui/scroll-area";
import Spinner from "@/app/(overview)/components/ultils/Spinner";
import {getCommentInPost} from "@/lib/data";

function CommentDialog({setShowCommentPage, postId}) {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageMeta, setPageMeta] = useState(null);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchComments() {
            try {
                const result = await getCommentInPost(page, postId);
                console.log(result.data)
                // setComments(data);
                // setPageMeta(meta);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchComments().then(r => {
        });
    }, [page, postId]);

    if (loading) {
        return <Spinner/>
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-background p-6 rounded-lg shadow-lg w-full max-w-3xl flex flex-col h-[80vh]">
                <h2 className="text-xl font-bold mb-4">Comments</h2>
                <ScrollArea className="flex-grow">
                    {loading ? (
                        <Spinner/>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <div className="space-y-4">
                            {comments.map((comment) => (
                                <CommentItem key={comment.commentId} comment={comment}/>
                            ))}
                        </div>
                    )}
                </ScrollArea>
                <div className="mt-6">
                    <Textarea
                        placeholder="Write a comment..."
                        className="w-full rounded-md border border-muted px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                    <div className="flex justify-end mt-2">
                        <Button onClick={() => setShowCommentPage(false)}>Close</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentDialog;