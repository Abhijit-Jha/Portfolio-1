import React from 'react'
import CertificateCard from './ui/CertificateCard'
import Highlighter from './ui/Highlighter'
import { certificatesDetails } from './utils/certificates'

const Certificates = () => {
    return (
        <div className='flex flex-col items-center justify-center px-4 py-10'>
            {/* Header Section */}
            <div className='text-center'>
                <div className='text-lg md:text-4xl mb-4 text-black dark:text-white relative z-10'>
                    <Highlighter>
                        <p className='relative z-10'>
                            Certifications
                        </p>
                    </Highlighter>
                </div>
                <div className='text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mx-auto'>
                    Certified achievements from my learning journey.
                </div>
            </div>

            {/* Cards Section */}
            <div className='mt-10 grid grid-cols-1 sm:grid-cols-1 gap-6 justify-items-center w-full max-w-5xl'>
                {certificatesDetails.map((c, index) => (
                    <CertificateCard
                        key={index}
                        title={c.title}
                        description={c.description}
                        tags={c.tags}
                        redirectLink={c.certificateURL}
                    />
                ))}
            </div>
        </div>
    )
}

export default Certificates
