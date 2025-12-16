import { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { PRODUCTS, Product } from "@/lib/data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Ruler, Edit3, Truck, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductPage() {
  const [match, params] = useRoute("/product/:id");
  const [product, setProduct] = useState<Product | null>(null);
  
  // State for selections
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [currentImage, setCurrentImage] = useState<string>("");

  useEffect(() => {
    if (params?.id) {
      const found = PRODUCTS.find(p => p.id === params.id);
      if (found) {
        setProduct(found);
        // Set defaults
        if (found.colors.length > 0) {
          setSelectedColor(found.colors[0].name);
          setCurrentImage(found.colors[0].image);
        } else {
          setCurrentImage(found.defaultImage);
        }
        if (found.sizes.length > 0) {
          setSelectedSize(found.sizes[0]);
        }
      }
    }
  }, [params?.id]);

  const handleColorChange = (colorName: string, colorImage: string) => {
    setSelectedColor(colorName);
    setCurrentImage(colorImage);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Product not found...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 pt-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Left Column - Images */}
            <div className="space-y-6">
              <div className="aspect-[3/4] w-full bg-secondary/20 rounded-sm overflow-hidden relative group">
                <img 
                  src={currentImage} 
                  alt={`${product.name} - ${selectedColor}`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                  key={currentImage} // Key forces re-render for animation
                />
              </div>
              
              {/* Thumbnails (Simulated) */}
              <div className="grid grid-cols-4 gap-4">
                 {product.colors.map((color) => (
                   <button
                     key={color.name}
                     onClick={() => handleColorChange(color.name, color.image)}
                     className={cn(
                       "aspect-square rounded-sm overflow-hidden border-2 transition-all",
                       selectedColor === color.name ? "border-primary opacity-100" : "border-transparent opacity-70 hover:opacity-100"
                     )}
                   >
                     <img src={color.image} alt={color.name} className="w-full h-full object-cover" />
                   </button>
                 ))}
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="flex flex-col">
              <div className="mb-8">
                <h1 className="font-serif text-4xl font-bold text-foreground mb-2">{product.name}</h1>
                <p className="text-2xl font-light text-muted-foreground">${product.price.toFixed(2)}</p>
              </div>

              <div className="space-y-8 flex-1">
                {/* Color Selection */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium uppercase tracking-wide">Color: <span className="text-primary">{selectedColor}</span></span>
                  </div>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => handleColorChange(color.name, color.image)}
                        className={cn(
                          "w-10 h-10 rounded-full border-2 p-1 transition-all",
                          selectedColor === color.name ? "border-primary" : "border-transparent hover:border-gray-200"
                        )}
                        title={color.name}
                      >
                        <div 
                          className="w-full h-full rounded-full border border-black/10" 
                          style={{ backgroundColor: color.value }}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium uppercase tracking-wide">Size</span>
                    <button className="text-xs text-muted-foreground underline flex items-center gap-1 hover:text-foreground">
                      <Ruler className="w-3 h-3" /> Size Guide
                    </button>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "py-3 text-sm border transition-all",
                          selectedSize === size 
                            ? "border-primary bg-primary/5 text-primary font-medium" 
                            : "border-input hover:border-foreground/50 text-foreground"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Edit Design / Customization Link */}
                <div className="border-t border-b py-6 border-dashed">
                  <button className="w-full flex items-center justify-between text-left group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-secondary rounded-full text-foreground group-hover:bg-primary group-hover:text-white transition-colors">
                        <Edit3 className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-medium block group-hover:text-primary transition-colors">Customize Design</span>
                        <span className="text-xs text-muted-foreground">Add sleeves, change length, or add embroidery</span>
                      </div>
                    </div>
                    <span className="text-primary text-sm font-medium underline">Edit</span>
                  </button>
                </div>

                {/* Actions */}
                <div className="pt-4 space-y-4">
                  <Button size="lg" className="w-full h-14 text-lg rounded-none bg-foreground hover:bg-foreground/90">
                    Add to Cart - ${(product.price).toFixed(2)}
                  </Button>
                  
                  <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground pt-4">
                    <div className="flex items-center gap-2 justify-center">
                      <Truck className="w-4 h-4" /> Free Shipping over $150
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <RefreshCcw className="w-4 h-4" /> 30-Day Returns
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="pt-8 text-sm leading-relaxed text-muted-foreground">
                  <h4 className="font-serif text-foreground text-lg mb-2">Description</h4>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
