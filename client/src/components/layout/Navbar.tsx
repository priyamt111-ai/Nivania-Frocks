import { Link } from "wouter";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
      <Link href="/shop" className="text-sm font-medium hover:text-primary transition-colors">Shop</Link>
      <Link href="/collections" className="text-sm font-medium hover:text-primary transition-colors">Collections</Link>
      <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About Us</Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="-ml-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] sm:w-[350px]">
              <div className="flex flex-col gap-6 mt-10">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">Home</Link>
                <Link href="/shop" onClick={() => setIsOpen(false)} className="text-lg font-medium">Shop</Link>
                <Link href="/collections" onClick={() => setIsOpen(false)} className="text-lg font-medium">Collections</Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium">About Us</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <div className="flex-1 md:flex-none text-center md:text-left">
          <Link href="/">
            <h1 className="font-serif text-2xl font-bold tracking-tight text-primary cursor-pointer">
              Nivania Kids
            </h1>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 mx-auto">
          <NavLinks />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary ring-2 ring-background" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
