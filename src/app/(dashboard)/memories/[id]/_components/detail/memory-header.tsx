'use client'

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
interface MemoryHeaderProps {
    title: string,
    date: string,
    author: string
}

const MemoryHeader = (props:MemoryHeaderProps)=>{

    const {title, date, author} = props;

    return(
        <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
                <Link 
                    href="/memories" 
                    className="hover:opacity-75 transition-opacity"
                >
                    <ArrowLeft className="h-6 w-6" />
                </Link>
                <h1 className="text-3xl font-bold">{title}</h1>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
                <span>{author}</span>
                <span>•</span>
                <time>{date}</time>
            </div>
        </div>
    )
}

export default MemoryHeader