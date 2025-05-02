import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "@/styles/global.css";

// import required modules
import { EffectCreative, Autoplay } from "swiper/modules";

export default function SwiperHome() {
    const Images = [
        {
            id: 1,
            webp: "/images/hero/hero-image-1.jpg",
            small: "/images/hero/hero-image-1.jpg",
        },
        {
            id: 2,
            webp: "/images/hero/hero-image-2.jpg",
            small: "/images/hero/hero-image-2.jpg",
        },
        {
            id: 3,
            webp: "/images/hero/hero-image-3.jpg",
            small: "/images/hero/hero-image-3.jpg",
        },
    ];
    return (
        <>
            <Swiper
                grabCursor={false}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ["-20%", 0, -1],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[EffectCreative, Autoplay]}
                className="home-swiper"
            >
                {Images.map((image) => (
                    <SwiperSlide key={image.id} className="otro-swiper-slide">
                        <picture>
                            <source
                                srcSet={image.webp}
                                type="image/avif"
                                media="(width >= 800px)"
                            />
                            <source
                                srcSet={image.small}
                                type="image/avif"
                                media="(width <= 800px)"
                            />
                            <img
                                className="object-cover w-full h-[100dvh]"
                                src={image.webp}
                                alt={`Imagen ${image.id}`}
                            />
                        </picture>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
