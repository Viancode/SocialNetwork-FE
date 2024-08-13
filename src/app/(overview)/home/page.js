"use client"
import {useAuth} from "@/app/(overview)/components/auth/AuthContext";
import {redirect, useRouter} from "next/navigation";
import Spinner from "@/app/(overview)/components/ultils/Spinner";

export default function Page() {
    const {currentUserId, loading} = useAuth();
    const router = useRouter();
    if (loading) {
        return <Spinner/>;
    }

    if (!currentUserId) {
        router.push("/login");
    }

    router.push(`/home/${currentUserId}`);
}