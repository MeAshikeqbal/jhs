"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface CarouselProps {
    slides: {
        title: string; _id: string; image: {
            asset: {
                metadata: any; url: string;
            };
        };
    }[];
    autoSlide?: boolean;
    autoSlideInterval?: number;
}

const fetchPosters = async () => {
    const query = `*[_type == "poster"]`;
    const posters = await client.fetch(query);
    return posters;
};


const Carousel: React.FC<CarouselProps> = ({ slides = [], autoSlide = false, autoSlideInterval = 3000 }) => {
    const [curr, setCurr] = useState(0);


    const next = useCallback(() => {
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    }, [slides]);

    const prev = useCallback(() => {
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    }, [slides]);

    useEffect(() => {
        if (!autoSlide || !slides.length) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, next, slides]);

    return (
        <div className="overflow-hidden relative top-0">
            <div
                className="flex transition-transform ease-out duration-500 h-56 md:h-96 lg:h-96"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index}
                        className={`relative w-full h-full flex-shrink-0 transition-opacity duration-500 ${curr === index ? 'opacity-100 visible' : 'opacity-0 invisible'}`}                    >
                        <Image
                            src={slide.image.asset.url}
                            alt={`Slide ${index}`}
                            width={1000}
                            height={500}
                            placeholder="blur"
                            blurDataURL={slide.image.asset.metadata.lqip}
                            className="object-cover rounded-b-3xl w-full h-full absolute top-0 left-0 sm:h-80 md:h-96 lg:h-full"
                        />

                        <h1 className="absolute bottom-0 left-0 p-4 text-white font-bold text-2xl bg-black bg-opacity-50 sm:text-3xl md:text-4xl">
                            {slide.title}
                        </h1>
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={prev}
                    className="p-1 rounded-full shadow bg-white/40 text-gray-800 hover:bg-white"
                >
                    <ChevronLeft size={24} className=" opacity-40 hover:opacity-100" />
                </button>
                <button
                    onClick={next}
                    className="p-1 rounded-full shadow bg-white/40 text-gray-800 hover:bg-white"
                >
                    <ChevronRight size={24} className=" opacity-40 hover:opacity-100" />
                </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurr(index)}
                        className={`w-2 h-2 rounded-full ${curr === index ? 'bg-white' : 'bg-gray-400'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;