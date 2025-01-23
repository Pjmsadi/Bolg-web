"use client";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart{
    name: string;
    description: string;
    price: number;
    currency: string;
    image: string;
    id : string;
}

export default function AddToCart({currency,description,image,name,price }: ProductCart) {
    const {addItem , handleCartClick } = useShoppingCart();
    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image : urlFor(image).url(), 
        id: name,  
    }
    return(
        <Button onClick={ () =>{ 
            addItem(product); handleCartClick();}}>
            Add to Cart
        </Button>
    )
}