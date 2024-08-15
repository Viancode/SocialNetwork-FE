import {Card, CardContent, CardHeader} from "@/components/ui/card";
import SuggestFriendItem from "@/app/(overview)/components/friend/SuggestFriendItem";
import {ScrollArea} from "@/components/ui/scroll-area";
import {getSuggestFriend} from "@/lib/data";
import SomethingWentWrong from "@/app/(overview)/components/ultils/SomethingWentWrong";

async function SuggestFriendList() {
    const res = await getSuggestFriend();
    let pageMeta = null;
    let suggestFriends = null;
    if (res.isSuccessful) {
        pageMeta = res.data.pageMeta;
        suggestFriends = res.data.data;
    }

    return (
        <Card>
            <CardHeader>
                <h4 className="font-semibold">Suggested Friends</h4>
            </CardHeader>
            <CardContent className="grid gap-4 max-h-96">
                <ScrollArea className="max-h-96">
                    {res.isSuccessful ? suggestFriends.map((friend) => {
                        return <SuggestFriendItem key={friend.id} suggestFriendInfo={friend}/>
                    }) : <SomethingWentWrong/>}
                </ScrollArea>
            </CardContent>
        </Card>
    )
}

export default SuggestFriendList;