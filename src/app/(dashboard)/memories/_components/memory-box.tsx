"use client"
interface MemoryBoxProps{
    children: React.ReactNode;
    className?: string
}

const MemoryBox = ({children, className=""}:MemoryBoxProps)=>{


    return(

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4
        ${className}`}>
            {children}
        </div>

    )
}

export default MemoryBox