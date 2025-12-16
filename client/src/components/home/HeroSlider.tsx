import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from "@/components/ui/button";
import { HERO_SLIDES } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export function HeroSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  return (
    <div className="relative overflow-hidden bg-secondary/20" ref={emblaRef}>
      <div className="flex">
        {HERO_SLIDES.map((slide) => (
          <div key={slide.id} className="relative flex-[0_0_100%] min-w-0 h-[600px] md:h-[700px]">
            <img 
              src={slide.image} 
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" /> {/* Overlay */}
            
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="container px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <h2 className="font-serif text-4xl md:text-7xl font-bold text-white mb-6 drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-sm font-light">
                  {slide.subtitle}
                </p>
                <Button size="lg" className="bg-white text-foreground hover:bg-white/90 rounded-none px-8 py-6 text-lg tracking-wider">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
