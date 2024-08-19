import {getListBlock} from "@/lib/data";
import SomethingWentWrong from "@/app/(overview)/components/ultils/SomethingWentWrong";
import FriendList from "@/app/(overview)/components/friend/FriendList";
import ScrollToTop from "@/app/(overview)/components/ultils/ScrollToTop";

export default async function Page({searchParams}) {
    const page = searchParams?.page;
    const result = await getListBlock(page);

    let pageMeta = null;
    let friendRequests = null;

    if (result.isSuccessful) {
        pageMeta = result.data.pageMeta;
        friendRequests = result.data.data;
    }
    return (
        <div className="grid gap-4 pt-6">
            {!result.isSuccessful ? <SomethingWentWrong/> : (
                <FriendList initialFriends={friendRequests} initialPageMeta={pageMeta} type="block"/>
            )}
            <ScrollToTop/>
        </div>
    )
}