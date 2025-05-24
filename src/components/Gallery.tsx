import { useEffect, useState, useCallback } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Definimos un array de imágenes de ejemplo
const images = [
    "/images/gallery/gallery-44.webp",
    "/images/gallery/gallery-2.webp",
    "/images/gallery/gallery-3.webp",
    "/images/gallery/gallery-4.webp",
    "/images/gallery/gallery-5.webp",
    "/images/gallery/gallery-6.webp",
    "/images/gallery/gallery-7.webp",
    "/images/gallery/gallery-8.webp",
    "/images/gallery/gallery-9.webp",
    "/images/gallery/gallery-10.webp",
    "/images/gallery/gallery-11.webp",
    "/images/gallery/gallery-12.webp",
    "/images/gallery/gallery-13.webp",
    "/images/gallery/gallery-14.webp",
    "/images/gallery/gallery-15.webp",
    "/images/gallery/gallery-16.webp",
    "/images/gallery/gallery-17.webp",
    "/images/gallery/gallery-18.webp",
    "/images/gallery/gallery-19.webp",
    "/images/gallery/gallery-20.webp",
    "/images/gallery/gallery-21.webp",
    "/images/gallery/gallery-22.webp",
    "/images/gallery/gallery-23.webp",
    "/images/gallery/gallery-24.webp",
    "/images/gallery/gallery-25.webp",
    "/images/gallery/gallery-26.webp",
    "/images/gallery/gallery-27.webp",
    "/images/gallery/gallery-28.webp",
    "/images/gallery/gallery-29.webp",
    "/images/gallery/gallery-30.webp",
    "/images/gallery/gallery-31.webp",
    "/images/gallery/gallery-32.webp",
    "/images/gallery/gallery-33.webp",
    "/images/gallery/gallery-34.webp",
    "/images/gallery/gallery-35.webp",
    "/images/gallery/gallery-36.webp",
    "/images/gallery/gallery-37.webp",
    "/images/gallery/gallery-38.webp",
    "/images/gallery/gallery-39.webp",
    "/images/gallery/gallery-40.webp",
    "/images/gallery/gallery-41.webp",
    "/images/gallery/gallery-42.webp",
    "/images/gallery/gallery-43.webp",
    "/images/gallery/gallery-45.webp",
    "/images/gallery/gallery-46.webp",
    "/images/gallery/gallery-47.webp",
    "/images/gallery/gallery-48.webp",
    "/images/gallery/gallery-49.webp",
    "/images/gallery/gallery-50.webp",
    "/images/gallery/gallery-51.webp",
];

export function ParallaxCarousel() {
    const [mainApi, setMainApi] = useState<CarouselApi>();
    const [thumbApi, setThumbApi] = useState<CarouselApi>();
    const [currentIndex, setCurrentIndex] = useState(0);

    const onThumbClick = useCallback(
        (index: number) => {
            mainApi?.scrollTo(index);
        },
        [mainApi]
    );

    const handleMainSelect = useCallback(() => {
        if (!mainApi || !thumbApi) return;
        setCurrentIndex(mainApi.selectedScrollSnap());
        thumbApi.scrollTo(mainApi.selectedScrollSnap());
    }, [mainApi, thumbApi]);

    useEffect(() => {
        if (!mainApi) return;

        mainApi.on("select", handleMainSelect);
        mainApi.on("scroll", () => {
            if (!mainApi) return;
        });

        return () => {
            mainApi.off("select", handleMainSelect);
        };
    }, [mainApi, handleMainSelect]);

    return (
        <div className="w-full space-y-4">
            <Carousel
                setApi={setMainApi}
                opts={{
                    loop: true,
                }}
                className="max-sm:w-[calc(100vw-16px)] h-[414px] md:w-full sm:h-auto"
            >
                <CarouselContent>
                    {images.map((src, index) => (
                        <CarouselItem key={index}>
                            <img
                                src={src || "/placeholder.svg"}
                                alt={`Fotos de eventos ${index + 1}`}
                                width={720}
                                height={600}
                                loading="lazy"
                                decoding="async"
                                className="h-[400px] w-full max-h-[600px] rounded-md object-cover"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden text-black left-2 lg:flex" />
                <CarouselNext className="hidden text-black right-2 lg:flex" />
            </Carousel>

            <div className="relative w-full sm:w-full">
                <Carousel
                    setApi={setThumbApi}
                    opts={{
                        containScroll: "keepSnaps",
                        dragFree: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2">
                        {images.map((src, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-2 basis-1/5 cursor-pointer "
                            >
                                <div
                                    className={cn(
                                        "relative w-full",
                                        currentIndex === index
                                            ? "border-2 border-primary rounded-sm"
                                            : ""
                                    )}
                                    onClick={() => onThumbClick(index)}
                                >
                                    <img
                                        src={src || "/placeholder.svg"}
                                        alt={`Fotos de eventos - ${index + 1}`}
                                        width={138}
                                        height={115}
                                        loading="lazy"
                                        decoding="async"
                                        className="object-cover rounded-sm md:w-full md:h-auto"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}
