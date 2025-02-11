"use client"

interface MemoryContentProps {
    content: string,
    imageUrl?: string,
    tags?: string[],
    familyMembers?: string[]
}

const MemoryContent = (props: MemoryContentProps) => {
    const { content, imageUrl, tags = [], familyMembers = [] } = props;

    return (

        <div className="space-y-6">
            {
                imageUrl && (
                    <div className="relative w-full h-[400px]">
                        <img src={imageUrl}
                            alt="Memory"
                            className="object-cover rounded-lg w-full h-full"
                        />
                    </div>
                )}
            <div className="prose max-w-none">
                <p>{content}</p>
            </div>
            {
                tags.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                        {
                            tags.map((tag) => (
                                <span key={tag} className="px-2 py-1 bg-secondary rounded-full text-sm">
                                    {tag}
                                </span>
                            ))
                        }
                    </div>
                )}

            {
                familyMembers.length > 0 && (
                    <div className="flex gap-2 items-center text-muted-foreground">
                        <span>With:</span>
                        {
                            familyMembers.map((member) => (
                                <span key={member} className="font-medium">
                                    {member}
                                </span>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )

}

export default MemoryContent