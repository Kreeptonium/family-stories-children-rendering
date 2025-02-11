'use client'
import MemoriesAssembly from "./assembly/memories.assembly"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"

const mockMemories = [
    {
        id: "1",
        title: "First Family Reunion",
        date: "2024-01-15",
        preview: "A wonderful day spent with the entire family at the park...",
        imageUrl: "https://picsum.photos/400/300",
        author: "John Doe"
    },
    {
        id: "2",
        title: "Grandma's Recipe",
        date: "2024-01-20",
        preview: "The secret family recipe that's been passed down generations...",
        author: "Jane Doe"
    }
]

const MemoriesPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [memories, setMemories] = useState(mockMemories)

    useEffect(() => {
        const fetchMemories = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000))
            } catch (error) {
                setError('Failed to fetch memories')
            } finally {
                setIsLoading(false)
            }
        }
        fetchMemories()
    }, [])

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
            <h1 className="text-3xl font-bold mb-6">Family Memories</h1>
            <MemoriesAssembly memories={memories} />
        </div>
    )
}

export default MemoriesPage