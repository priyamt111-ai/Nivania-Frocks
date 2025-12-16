import { Link } from "wouter";
import { PRODUCTS } from "@/lib/data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function FeaturedProducts() {
  // Just showing the products available in data
  const displayProducts = PRODUCTS; 

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-2 block">New Collection</span>
          <h2 className="font-serif text-4xl font-bold text-foreground">Trending Favorites</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayProducts.map((product, idx) => (
            <Link key={`${product.id}-${idx}`} href={`/product/${product.id}`}>
              <Card className="group cursor-pointer border-none shadow-none bg-transparent">
                <CardContent className="p-0 overflow-hidden relative aspect-[3/4] rounded-sm bg-secondary/20">
                  <img 
                    src={product.defaultImages[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  
                  {/* Quick add overlay - appears on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                     <Button className="w-full bg-white/90 text-foreground hover:bg-white backdrop-blur-sm shadow-sm">
                        View Details
                     </Button>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start px-0 pt-4 gap-1">
                  <h3 className="font-serif text-lg font-medium group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="rounded-none px-8 border-primary text-primary hover:bg-primary hover:text-white">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
