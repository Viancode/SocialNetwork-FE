import {Inter} from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/sonner";
import Header from "@/app/(overview)/components/layout/Header";
import Sidebar from "@/app/(overview)/components/layout/Sidebar";
import {ThemeProvider} from "next-themes";
import {AuthProvider} from "@/app/(overview)/components/context/AuthContext";
import {PostProvider} from "@/app/(overview)/components/context/PostContext";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Social network",
    description: "Social network",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <AuthProvider>
                <PostProvider>
                    {children}
                </PostProvider>
            </AuthProvider>
        </ThemeProvider>
        </body>
        <Toaster position="top-center"/>
        </html>
    );
}
