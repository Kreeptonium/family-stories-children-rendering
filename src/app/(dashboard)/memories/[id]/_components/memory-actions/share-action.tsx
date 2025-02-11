'use client'

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Share } from "lucide-react"

interface ShareActionsProps {
    onShare: () => Promise<void>,
    memoryUrl: string
}

const ShareAction = (props: ShareActionsProps) => {
    const { onShare, memoryUrl } = props

    const handleCopy = async () => {
        await navigator.clipboard.writeText(memoryUrl)
        await onShare()
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                    <Share className="h-4 w-4 mr-2" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Share Memory</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    <p className="text-sm text-muted-foreground">
                        Share this memory with your family members
                    </p>
                    <div className="flex items-center gap-2">
                        <Input value={memoryUrl} readOnly />
                        <Button onClick={handleCopy}>Copy</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )

}
export default ShareAction