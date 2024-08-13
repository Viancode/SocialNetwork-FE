import {Card, CardContent, CardHeader} from "@/components/ui/card";
import Post from "@/app/(overview)/components/post/Post";
import UserForm from "@/app/(overview)/components/user/UserForm";
import {getCommentInPost, getUserPost, getUserProfile} from "@/lib/data";
import NotAllow from "@/app/(overview)/components/ultils/NotAllow";
import UserProfile from "@/app/(overview)/components/user/UserProfile";

export default async function Page({params}) {
    let targetUserId = params.targetUserID;
    const userProfile = await getUserProfile(targetUserId);
    const userPost = await getUserPost(1, targetUserId);
    const comment = await getCommentInPost(1, 19);

    return (
        <>
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <h4 className="font-semibold">Personal Information</h4>
                    </div>
                </CardHeader>
                {userProfile.isAllowed ? <UserProfile userProfile={userProfile.data}/> :
                    <NotAllow message={userProfile.message}/>}
            </Card>
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <h4 className="font-semibold">Post</h4>
                    </div>
                </CardHeader>
                <CardContent className="grid gap-6">
                    {userPost.isSuccessful ? userPost.data.map(post => (
                        <Post key={post.id} postInfo={post}/>
                    )) : <NotAllow message={userPost.message}/>}
                </CardContent>
            </Card>
        </>
    )
}