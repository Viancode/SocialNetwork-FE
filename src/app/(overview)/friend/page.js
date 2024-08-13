import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {ScrollArea} from "@/components/ui/scroll-area"
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar"
import {Popover, PopoverTrigger, PopoverContent} from "@/components/ui/popover"
import {Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem} from "@/components/ui/command"
import {MoveHorizontal, Trash, UserRoundX, X} from "lucide-react";

export default function Page() {
    return (
        <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6">Friend Management</h1>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Send Friend Request</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <Input type="text" placeholder="Enter username or email" className="w-full"/>
                            <Button className="w-full">Send Request</Button>
                        </form>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Sent Friend Requests</CardTitle>
                    </CardHeader>
                    <CardContent className="max-h-[300px] overflow-auto">
                        <ScrollArea className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg"/>
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">John Doe</p>
                                        <p className="text-muted-foreground text-sm">john@example.com</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon">
                                    <X className="w-4 h-4"/>
                                </Button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg"/>
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">Jane Doe</p>
                                        <p className="text-muted-foreground text-sm">jane@example.com</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon">
                                    <X className="w-4 h-4"/>
                                </Button>
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Received Friend Requests</CardTitle>
                    </CardHeader>
                    <CardContent className="max-h-[300px] overflow-auto">
                        <ScrollArea className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg"/>
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">John Smith</p>
                                        <p className="text-muted-foreground text-sm">john@example.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline">Accept</Button>
                                    <Button variant="ghost">Decline</Button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg"/>
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">Jane Smith</p>
                                        <p className="text-muted-foreground text-sm">jane@example.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline">Accept</Button>
                                    <Button variant="ghost">Decline</Button>
                                </div>
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Current Friends</CardTitle>
                    </CardHeader>
                    <CardContent className="max-h-[300px] overflow-auto">
                        <ScrollArea className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg"/>
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">John Doe</p>
                                        <p className="text-muted-foreground text-sm">john@example.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <MoveHorizontal className="w-4 h-4"/>
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="p-0" align="end">
                                            <Command>
                                                <CommandInput placeholder="Change relation..."/>
                                                <CommandList>
                                                    <CommandEmpty>No relations found.</CommandEmpty>
                                                    <CommandGroup>
                                                        <CommandItem
                                                            className="flex flex-col items-start gap-1 px-4 py-2">
                                                            <p>Friend</p>
                                                            <p className="text-sm text-muted-foreground">Regular
                                                                friend</p>
                                                        </CommandItem>
                                                        <CommandItem
                                                            className="flex flex-col items-start gap-1 px-4 py-2">
                                                            <p>Best Friend</p>
                                                            <p className="text-sm text-muted-foreground">Close
                                                                friend</p>
                                                        </CommandItem>
                                                        <CommandItem
                                                            className="flex flex-col items-start gap-1 px-4 py-2">
                                                            <p>Father</p>
                                                            <p className="text-sm text-muted-foreground">Related by
                                                                blood</p>
                                                        </CommandItem>
                                                        <CommandItem
                                                            className="flex flex-col items-start gap-1 px-4 py-2">
                                                            <p>Mother</p>
                                                            <p className="text-sm text-muted-foreground">Related by
                                                                blood</p>
                                                        </CommandItem>
                                                        <CommandItem
                                                            className="flex flex-col items-start gap-1 px-4 py-2">
                                                            <p>Brother</p>
                                                            <p className="text-sm text-muted-foreground">Related by
                                                                blood</p>
                                                        </CommandItem>
                                                        <CommandItem
                                                            className="flex flex-col items-start gap-1 px-4 py-2">
                                                            <p>Sister</p>
                                                            <p className="text-sm text-muted-foreground">Related by
                                                                blood</p>
                                                        </CommandItem>
                                                        <CommandItem
                                                            className="flex flex-col items-start gap-1 px-4 py-2">
                                                            <p>Dating</p>
                                                            <p className="text-sm text-muted-foreground">In a romantic
                                                                relationship</p>
                                                        </CommandItem>
                                                        <CommandItem
                                                            className="flex flex-col items-start gap-1 px-4 py-2">
                                                            <p>Blocked</p>
                                                            <p className="text-sm text-muted-foreground">No longer
                                                                friends</p>
                                                        </CommandItem>
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <Button variant="ghost" size="icon">
                                        <Trash className="w-4 h-4"/>
                                    </Button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg"/>
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">Jane Doe</p>
                                        <p className="text-muted-foreground text-sm">jane@example.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <MoveHorizontal className="w-4 h-4"/>
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="p-0" align="end">
                                            <Command>
                                                <CommandInput placeholder="Change relation..."/>
                                                <CommandList>
                                                    <CommandEmpty>No relations found.</CommandEmpty>
                                                    <CommandGroup>
                                                        <CommandItem
                                                            className="flex flex-col items-start gap-1 px-4 py-2">
                                                            <p>Friend</p>
                                                            <p className="text-sm text-muted-foreground">Regular
                                                                friend</p>
                                                        </CommandItem>
                                                        <CommandItem
                                                            className="flex flex-col items-start gap-1 px-4 py-2">
                                                            <p>Best Friend</p>
                                                            <p className="text-sm text-muted-foreground">Close
                                                                friend</p>
                                                        </CommandItem>
                                                        <CommandItem
                                                            className="flex flex-col items-start gap-1 px-4 py-2">
                                                            <p>Father</p>
                                                            <p className="text-sm text-muted-foreground">Related by
                                                                blood</p>
                                                        </CommandItem>
                                                        <CommandItem
                                                            className="flex flex-col items-start gap-1 px-4 py-2">
                                                            <p>Mother</p>
                                                            <p className="text-sm text-muted-foreground">Related by
                                                                blood</p>
                                                        </CommandItem>
                                                        <CommandItem
                                                            className="flex flex-col items-start gap-1 px-4 py-2">
                                                            <p>Brother</p>
                                                            <p className="text-sm text-muted-foreground">Related by
                                                                blood</p>
                                                        </CommandItem>
                                                        <CommandItem
                                                            className="flex flex-col items-start gap-1 px-4 py-2">
                                                            <p>Sister</p>
                                                            <p className="text-sm text-muted-foreground">Related by
                                                                blood</p>
                                                        </CommandItem>
                                                        <CommandItem
                                                            className="flex flex-col items-start gap-1 px-4 py-2">
                                                            <p>Dating</p>
                                                            <p className="text-sm text-muted-foreground">In a romantic
                                                                relationship</p>
                                                        </CommandItem>
                                                        <CommandItem
                                                            className="flex flex-col items-start gap-1 px-4 py-2">
                                                            <p>Blocked</p>
                                                            <p className="text-sm text-muted-foreground">No longer
                                                                friends</p>
                                                        </CommandItem>
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <Button variant="ghost" size="icon">
                                        <Trash className="w-4 h-4"/>
                                    </Button>
                                </div>
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Blocked Friends</CardTitle>
                    </CardHeader>
                    <CardContent className="max-h-[300px] overflow-auto">
                        <ScrollArea className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg"/>
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">John Doe</p>
                                        <p className="text-muted-foreground text-sm">john@example.com</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon">
                                    <UserRoundX className="w-4 h-4"/>
                                </Button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg"/>
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">Jane Doe</p>
                                        <p className="text-muted-foreground text-sm">jane@example.com</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon">
                                    <UserRoundX className="w-4 h-4"/>
                                </Button>
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Find New Friends</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <Input type="text" placeholder="Search for new friends" className="w-full"/>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg"/>
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">John Doe</p>
                                        <p className="text-muted-foreground text-sm">john@example.com</p>
                                    </div>
                                </div>
                                <Button variant="outline">Send Request</Button>
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg"/>
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">Jane Doe</p>
                                        <p className="text-muted-foreground text-sm">jane@example.com</p>
                                    </div>
                                </div>
                                <Button variant="outline">Send Request</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
