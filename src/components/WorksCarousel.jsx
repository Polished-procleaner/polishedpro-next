import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import ImageRevealSlider from "./ImageRevealSlider";

export default function WorksCarousel() {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
        watchDrag: false, // evita que inicie el drag
      }}
      /* plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]} */
    >
      <CarouselContent className="-ml-1">
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/3 lg:basis-1/3 bg-transparent"
          >
            <div className="rounded-2xl aspect-square">
              <ImageRevealSlider
                afterImage={`/images/works/after/${index + 1}.png`}
                beforeImage={`/images/works/before/${index + 1}.png`}
                width={600}
                height={400}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70 border-none size-8" />
      <CarouselNext className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70 border-none size-8" />
    </Carousel>
  );
}
