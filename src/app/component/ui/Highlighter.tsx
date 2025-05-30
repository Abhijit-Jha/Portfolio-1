import { PointerHighlight } from '@/components/ui/pointer-highlight'
import React from 'react'

const Highlighter = ({ children }: { children: React.ReactNode }) => {
    return (
        <PointerHighlight
            rectangleClassName="bg-blue-300 dark:bg-gray-700 border-neutral-300 dark:border-neutral-600 leading-loose"
            pointerClassName="text-blue-500 h-3 w-3"
            containerClassName="inline-block mr-1"
        >
            {children}
        </PointerHighlight>)
}

export default Highlighter
