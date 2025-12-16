import { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { PRODUCTS, Product } from "@/lib/data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Ruler } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductPage() {
  const [match, params] = useRoute("/product/:id");
  const [product, setProduct] = useState<Product | null>(null);
  
  // State for selections
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [mainImage, setMainImage] = useState<string>("");

  useEffect(() => {
    if (params?.id) {
      const found = PRODUCTS.find(p => p.id === params.id);
      if (found) {
        setProduct(found);
        // Set defaults
        if (found.colors.length > 0) {
          setSelectedColor(found.colors[0].name);
          setCurrentImages(found.colors[0].images);
          setMainImage(found.colors[0].images[0]);
        } else {
          setCurrentImages(found.defaultImages);
          setMainImage(found.defaultImages[0]);
        }
        if (found.sizes.length > 0) {
          setSelectedSize(found.sizes[0]);
        }
      }
    }
  }, [params?.id]);

  const handleColorChange = (colorName: string, images: string[]) => {
    setSelectedColor(colorName);
    setCurrentImages(images);
    setMainImage(images[0]);
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column - Images Gallery (7 columns) */}
            <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
                {currentImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMainImage(img)}
                    className={cn(
                      "flex-shrink-0 w-20 h-24 md:w-24 md:h-32 rounded-sm overflow-hidden border-2 transition-all",
                      mainImage === img ? "border-primary" : "border-transparent hover:border-gray-200"
                    )}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              
              {/* Main Image */}
              <div className="flex-1 aspect-[3/4] bg-secondary/20 rounded-sm overflow-hidden relative">
                 <img 
                  src={mainImage} 
                  alt={`${product.name} - ${selectedColor}`}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  key={mainImage}
                />
              </div>
            </div>

            {/* Right Column - Details (5 columns) */}
            <div className="lg:col-span-5 flex flex-col space-y-8">
              
              {/* Header Info */}
              <div>
                <div className="flex gap-2 mb-4">
                  {product.tags?.map(tag => (
                     <span key={tag} className={cn(
                       "px-3 py-1 text-xs font-medium rounded-full",
                       tag === "New" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
                     )}>
                       {tag}
                     </span>
                  ))}
                </div>
                
                <h1 className="font-sans text-2xl md:text-3xl font-normal text-foreground mb-2">{product.name} - {selectedColor}</h1>
                <div className="flex items-baseline gap-2">
                  <p className="text-xl font-medium text-foreground">₹{product.price.toLocaleString()}</p>
                  <span className="text-sm text-muted-foreground">Incl. of all taxes</span>
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium">Select Color</span>
                </div>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => handleColorChange(color.name, color.images)}
                      className={cn(
                        "w-12 h-12 rounded-full border-2 p-0.5 transition-all relative",
                        selectedColor === color.name ? "border-foreground" : "border-transparent hover:border-gray-300"
                      )}
                      title={color.name}
                    >
                      <div 
                        className="w-full h-full rounded-full border border-black/10" 
                        style={{ backgroundColor: color.value }}
                      />
                      {selectedColor === color.name && (
                         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-2 h-2 bg-white rounded-full shadow-sm" />
                         </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium">Select Standard Size</span>
                  <button className="text-xs text-primary font-medium uppercase tracking-wide hover:underline">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center text-sm border transition-all",
                        selectedSize === size 
                          ? "bg-foreground text-background border-foreground" 
                          : "bg-transparent border-gray-200 text-foreground hover:border-gray-400"
                      )}
                    >
                      {size.replace('Y', '')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Size Option */}
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-foreground">Prefer a Custom Size?</span>
                <button className="text-xs text-primary font-medium uppercase tracking-wide hover:underline">
                  Add Custom Size
                </button>
              </div>

              <div className="h-px bg-gray-100 w-full" />

              {/* Design Details Box */}
              <div className="border border-gray-200 rounded-lg p-6 space-y-4">
                 <div>
                    <h3 className="text-base font-medium mb-1">Design Details</h3>
                    <p className="text-sm text-muted-foreground">{product.designDetails || "Standard Fit | Premium Fabric"}</p>
                 </div>
                 
                 <Button variant="outline" className="w-full rounded-full h-12 text-sm font-medium border-foreground text-foreground hover:bg-gray-50 uppercase tracking-wide">
                    Edit Design
                 </Button>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-2">
                <Button className="flex-1 rounded-full h-14 text-sm font-medium bg-foreground text-background hover:bg-foreground/90 uppercase tracking-wide">
                  Add to Bag
                </Button>
                <Button variant="outline" className="w-14 h-14 rounded-full border-gray-200 text-foreground hover:border-gray-400 p-0 flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>

              {/* Description Text */}
              <div className="pt-4 text-sm leading-relaxed text-muted-foreground">
                 <p>{product.description}</p>
              </div>

            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
