import React from 'react'
import { CircleArrowOutUpRight } from 'lucide-react'

type CertificateCardProps = {
    title: string
    description: string
    redirectLink?: string
    tags?: string[]
}

const CertificateCard = ({ title, description, redirectLink, tags }: CertificateCardProps) => {
    return (
        <div className="w-full sm:w-3/4 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-xl font-semibold text-black dark:text-white mb-2">
                {title}
            </div>
            <div className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                {description}
            </div>

            <div className='flex justify-between'>
                {tags && tags.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                        {tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 text-xs font-medium px-3 py-1 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {redirectLink && (
                    <div className='flex justify-end'>
                        <abbr title='View Certificate'>
                            <a
                                href={redirectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                            >
                                <CircleArrowOutUpRight className="w-4 h-4" />
                            </a>
                        </abbr>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CertificateCard
