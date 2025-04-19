import Image, { StaticImageData } from "next/image";

interface ImageData {
    src: StaticImageData;
    alt: string;
}

interface LearningCardProps {
    mainTitle: string;
    images?: ImageData[];
    extraText?: string;
}

function LearningCard({ mainTitle, images, extraText }: LearningCardProps) {
    return (
        <div className="p-5">
            <h3 className="text-lg font-semibold mb-3">{mainTitle}</h3>
            <div className="flex gap-4 overflow-x-auto">
                {images &&
                    images.map((data, index) => (
                        <Image
                            key={index}
                            src={data.src}
                            width={250}
                            height={200}
                            alt={data.alt}
                            className="rounded-lg shadow-md"
                        />
                    ))}
            </div>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-100">{extraText}</div>
        </div>
    );
}

export default LearningCard;
