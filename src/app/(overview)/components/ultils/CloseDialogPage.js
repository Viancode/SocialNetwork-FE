"use client";

import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

function CloseDialogPage() {
    const router = useRouter();

    const handleClose = () => {
        router.back();
    };

    return (
        <Button onClick={handleClose}>
            Close
        </Button>
    );
}

export default CloseDialogPage;