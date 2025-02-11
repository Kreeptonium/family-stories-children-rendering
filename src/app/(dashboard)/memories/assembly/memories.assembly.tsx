"use client"

import MemoryBox from "../_components/memory-box"
import MemoryCard from "../_components/memory-card"

interface Memory {
    id: string
    title: string
    date: string
    preview: string
    imageUrl?: string
    author: string
}

const MemoriesAssembly = ({ memories }: { memories: Memory[] }) => {
    return (
        <MemoryBox>
            {memories.map((memory) => (
                <MemoryCard
                    key={memory.id}
                    {...memory}
                />
            ))}
        </MemoryBox>
    )
}

export default MemoriesAssembly