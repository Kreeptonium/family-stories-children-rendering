'use client'
import MemoryAssembly from "./assembly/memory.assembly"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"
import { use, useEffect, useState } from "react"

interface MemoryPageProps {
    params: Promise<{
        id: string
    }>
}

interface Memory {
    title: string
    date: string
    author: string
    content: string
    imageUrl: string
    tags: string[]
    familyMembers: string[]
    memoryUrl: string
}


const mockMemory: Record<string, Memory> = {
    "1": {
        title: "First Family Reunion",
        date: "2024-01-15",
        author: "John Doe",
        content: "A wonderful day spent with the entire family at the park...",
        imageUrl: "https://picsum.photos/800/400",
        tags: ["Family", "Reunion", "Summer"],
        familyMembers: ["John", "Jane", "Kids"],
        memoryUrl: "http://localhost:3000/memories/1"
    },
    "2": {
        title: "Grandma's Recipe",
        date: "2024-01-20",
        author: "Jane Doe",
        content: "The secret family recipe that's been passed down generations...",
        imageUrl: "https://picsum.photos/800/400",
        tags: ["Recipe", "Family", "Tradition"],
        familyMembers: ["Grandma", "Jane"],
        memoryUrl: "http://localhost:3000/memories/2"
    }
}

const MemoryPage = ({ params }: MemoryPageProps) => {
    const { id } = use(params)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [memory, setMemory] = useState<Memory>(mockMemory[id])
    

    useEffect(() => {
        const fetchMemory = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000))
                setMemory(mockMemory[id])
            } catch (error) {
                setError('Failed to fetch memory')
            } finally {
                setIsLoading(false)
            }
        }
        fetchMemory()
    }, [id])

    const handleDelete = async () => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000))
            window.location.href = '/memories'
        } catch (error) {
            setError('Failed to delete memory')
        }
    }

    const handleEdit = async (data: { title: string, content: string }) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000))
            setMemory(prev => ({ ...prev, ...data }))
        } catch (error) {
            setError('Failed to update memory')
        }
    }

    const handleShare = async () => {
        try {
            await new Promise(resolve => setTimeout(resolve, 500))
        } catch (error) {
            setError('Failed to copy link')
        }
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <Loader2 className="h-8 w-8 animate-spin" />
            </div>
        )
    }

    if (error) {
        return (
            <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )
    }

    return (
        <div className="container mx-auto py-8">
            <MemoryAssembly
                {...memory}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onShare={handleShare}
            />
        </div>
    )
}

export default MemoryPage