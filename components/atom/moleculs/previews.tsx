"use client";

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import TransparentLogo from "@/assets/transparent-logo.png";

export default function Previews() {
  return (
    <Carousel plugins={[Autoplay({ delay: 2000 })]}>
      <CarouselContent>
        <CarouselItem className="flex justify-center items-center">
          <Image
            src={TransparentLogo.src}
            alt="loose and fluffy logo"
            width={300}
            height={300}
            priority={false}
            className="w-auto h-auto"
          />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center">
          <Image
            src={TransparentLogo.src}
            className="w-auto h-auto"
            alt="loose and fluffy logo"
            width={200}
            height={300}
            priority={false}
          />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center">
          <Image
            src={TransparentLogo.src}
            alt="loose and fluffy logo"
            className="w-auto h-auto"
            width={100}
            height={300}
            priority={false}
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
