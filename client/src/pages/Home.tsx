import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSlider } from "@/components/home/HeroSlider";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <FeaturedProducts />
        
        {/* Banner Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-foreground">Custom Tailoring</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every child is unique, and their dress should be too. We offer custom sizing and design modifications to ensure the perfect fit for your little one's special day.
            </p>
            <button className="text-primary font-medium border-b-2 border-primary hover:text-primary/80 transition-colors">
              Book a Consultation
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
