import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import mypic3 from "../../../lib/store/mypics/dump.jpg"

const Carousell = () => {
    return (
        <div className="flex justify-center">
            <Carousel className=" max-w-lg md:h-96 md:w-96">
                <CarouselPrevious />
                <CarouselContent>
                    <CarouselItem><img src={mypic3.src} className="object-cover h-96 w-96 "></img></CarouselItem>
                    <CarouselItem><img src={mypic3.src} className="object-cover h-96 w-96"></img></CarouselItem>
                    <CarouselItem><img src={mypic3.src} className="object-cover h-96 w-96"></img></CarouselItem>
                </CarouselContent>
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default Carousell
