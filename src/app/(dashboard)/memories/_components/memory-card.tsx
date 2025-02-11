"use client"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface MemoryCardProps {
    id: string,
    title: string,
    date: string,
    preview: string,
    imageUrl?: string,
    author: string
}

const MemoryCard = (props: MemoryCardProps) => {

    const { id, title, date, preview, imageUrl, author } = props;

    return (
        <Link href={`/memories/${id}`}>
            <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="font-semibold text-lg">
                    {title}
                </CardHeader>
                <CardContent>
                    {imageUrl && (
                        <div className="relative w-full h-48 mb-4">
                            <Image src={imageUrl} alt={title} fill className="object-cover rounded-md" />
                        </div>
                    )}
                    <p className="text-muted-foreground line-clamp-3">
                        {preview}
                    </p>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-muted-foreground">
                    <span>{author}</span>
                    <time>{date}</time>
                </CardFooter>

            </Card>


        </Link>
    )
}

export default MemoryCard