import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import mypic1 from "../../../lib/store/mypics/pic1.jpg";
import mypic2 from "../../../lib/store/mypics/pic2.jpg";
import mypic3 from "../../../lib/store/mypics/pic3.jpg";
import Image from "next/image";

const Carousell = () => {
    return (
        <div className="flex justify-center">
            <Carousel className="max-w-lg md:h-96 md:w-96">
                <CarouselPrevious />
                <CarouselContent>
                    <CarouselItem key="image-1">
                        <Image
                            src={mypic1}
                            alt="First carousel image"
                            className="object-cover h-96 w-96"
                        />
                    </CarouselItem>
                    <CarouselItem key="image-2">
                        <Image
                            src={mypic2}
                            alt="Second carousel image"
                            className="object-cover h-96 w-96"
                        />
                    </CarouselItem>
                    <CarouselItem key="image-3">
                        <Image
                            src={mypic3}
                            alt="Third carousel image"
                            className="object-cover h-96 w-96"
                        />
                    </CarouselItem>
                </CarouselContent>
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default Carousell;
