import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/30 pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-primary">Nivania Kids</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Crafting magical moments with our handcrafted collection of premium kids' wear. Where elegance meets playfulness.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer">New Arrivals</li>
              <li className="hover:text-primary cursor-pointer">Party Wear</li>
              <li className="hover:text-primary cursor-pointer">Casual Luxe</li>
              <li className="hover:text-primary cursor-pointer">Accessories</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer">Our Story</li>
              <li className="hover:text-primary cursor-pointer">Contact Us</li>
              <li className="hover:text-primary cursor-pointer">Shipping & Returns</li>
              <li className="hover:text-primary cursor-pointer">Size Guide</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="flex space-x-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
            <div className="mt-6">
              <p className="text-xs text-muted-foreground mb-2">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-background border rounded px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium hover:bg-primary/90 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nivania Kids. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
