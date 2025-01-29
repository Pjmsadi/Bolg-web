"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";

const Links = [
    { name: 'Home', href: '/' },
    { name: 'Men', href: '/Men' },
    { name: 'Women', href: '/Women' },
    { name: 'Teens', href: '/Teens' },
];

export default function Navbar() {
    const pathname = usePathname();
    const { handleCartClick } = useShoppingCart();

    return (
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl h-16">
                <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tighter">
                        Sadi<span className="text-primary">Chic</span>
                    </h1>
                </Link>

                <nav className="hidden lg:flex items-center gap-8">
                    {Links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all ${
                                pathname === link.href 
                                    ? 'text-primary after:w-full' 
                                    : 'text-foreground/60 hover:text-foreground'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleCartClick}
                        className="relative rounded-full h-10 w-10 hover:bg-accent/90 transition-colors"
                        aria-label="Open shopping cart"
                    >
                        <ShoppingBag className="h-5 w-5" />
                    
                    </Button>
                </div>
            </div>
        </header>
    );
}
