"use client"

import {useCallback, useEffect, useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import Spinner from "@/app/(overview)/components/ultils/Spinner";
import FriendItem from "@/app/(overview)/components/friend/FriendItem";
import AcceptAndRejectButton from "@/app/(overview)/components/friend/button/AcceptAndRejectButton";
import CancelRequestButton from "@/app/(overview)/components/friend/button/CancelRequestButton";
import UnFriendButton from "@/app/(overview)/components/friend/button/UnfriendButton";
import UnBlockButton from "@/app/(overview)/components/friend/button/UnBlockButton";
import SendRequestButton from "@/app/(overview)/components/friend/button/SendRequestButton";

function FriendList({initialFriends, initialPageMeta, type}) {
    const [friends, setFriends] = useState(initialFriends);
    const [pageMeta, setPageMeta] = useState(initialPageMeta);
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    useEffect(() => {
        if (initialPageMeta.page === 1) {
            setFriends(initialFriends);
        } else {
            setFriends(prevFriends => {
                const newFriendIds = new Set(initialFriends.map(friend => friend.id));
                const uniquePrevFriends = prevFriends.filter(friend => !newFriendIds.has(friend.id));
                return [...uniquePrevFriends, ...initialFriends];
            });
        }
        setPageMeta(initialPageMeta);
    }, [initialFriends, initialPageMeta, setFriends]);

    const loadMore = useCallback(async () => {
        if (pageMeta.hasNext && !isLoading) {
            setIsLoading(true); // Start loading
            const params = new URLSearchParams(searchParams);
            params.set("page", (pageMeta.page + 1).toString());
            await replace(`${pathname}?${params.toString()}`, {scroll: false});
            setIsLoading(false); // Stop loading
        }
    }, [pageMeta, searchParams, pathname, replace, isLoading]);

    const handleScroll = useCallback(() => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
            loadMore();
        }
    }, [loadMore]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    console.log(initialFriends)

    return (
        <div>
            <div className="grid gap-6">
                {friends.map(friend => (
                    <FriendItem key={friend.id} friendInfo={friend}>
                        {type === "request" && <CancelRequestButton userId={friend.id}/>}
                        {type === "received" && <AcceptAndRejectButton userId={friend.id}/>}
                        {type === "list" && <UnFriendButton userId={friend.id}/>}
                        {type === "block" && <UnBlockButton userId={friend.id}/>}
                        {type === "search" && <SendRequestButton userId={friend.id}/>}
                    </FriendItem>
                ))}
            </div>
            {isLoading && (
                <div className="mt-4 text-center">
                    <Spinner/>
                </div>
            )}
        </div>
    )
}

export default FriendList;