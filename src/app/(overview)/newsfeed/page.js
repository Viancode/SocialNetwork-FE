import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import Post from "@/app/(overview)/components/post/Post";

export default function Page() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Newsfeed</h4>
                    <Button variant="outline" size="sm">
                        <Plus/>
                        <span>Create Post</span>
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="grid gap-6">
                {/*<Post/>*/}
            </CardContent>
        </Card>
    )
}