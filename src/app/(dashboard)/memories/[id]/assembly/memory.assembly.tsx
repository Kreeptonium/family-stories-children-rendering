'use client'

import MemoryContent from "../_components/detail/memory-content"
import MemoryHeader from "../_components/detail/memory-header"
import DeleteAction from "../_components/memory-actions/delete-action"
import EditAction from "../_components/memory-actions/edit-action"
import ShareAction from "../_components/memory-actions/share-action"

interface MemoryAssemblyProps {
    title: string,
    date: string,
    author: string,
    content: string,
    imageUrl?: string,
    tags?: string[],
    familyMembers?: string[],
    memoryUrl: string,
    onDelete: () => Promise<void>,
    onEdit: (data: { title: string, content: string }) => Promise<void>,
    defaultValues?: {
        title: string
        content: string
    },
    onShare: () => Promise<void>
}

const MemoryAssembly = (props: MemoryAssemblyProps) => {
    const {
        title,
        date,
        author,
        content,
        imageUrl,
        tags,
        familyMembers,
        memoryUrl,
        onDelete,
        onEdit,
        defaultValues,
        onShare
    } = props
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-start">
                <MemoryHeader
                    title={title}
                    date={date}
                    author={author}
                />
                <div className="flex items-center gap-2">
                    <EditAction onEdit={onEdit} defaultValues={defaultValues} />
                    <ShareAction onShare={onShare} memoryUrl={memoryUrl} />
                    <DeleteAction onDelete={onDelete} />
                </div>
            </div>
            <MemoryContent
                content={content}
                imageUrl={imageUrl}
                tags={tags}
                familyMembers={familyMembers}
            />

        </div>
    )
}
export default MemoryAssembly