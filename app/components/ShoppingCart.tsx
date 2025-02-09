"use client"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"
import { useShoppingCart } from "use-shopping-cart";
import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function ShoppingCart() {
    const {cartCount,shouldDisplayCart, handleCartClick , cartDetails , removeItem , totalPrice} = useShoppingCart();
    return(
        <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
      <SheetContent className="sm:max-w-lg w-(90vw)">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
            <div className="mt-8 flex-1 overflow-auto">
            <ul className="-my-6 divide-y divide-gray-200">
                {cartCount === 0 ? (
                    <h1 className="text-4xl py-6" >Dear Customer you dont have any iteams </h1>
                ):(
                    <>

                    {Object.values(cartDetails ??{}).map((entry) => (
                        <li key={entry.id} className="py-6 flex">
                            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                              <Image
                               src={entry.image as string}
                                alt="Product image"
                                 width={100}
                                 height={100} />
                            </div>
                            <div className="ml-4 flex-1 flex flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    {entry.name}
                                  </h3>
                                  <p className="ml-4">${entry.price}</p>
                                </div>
                                <p className="ml-1 text-sm text-gray-500 line-clamp-2">{entry.description}</p>
                              </div>
                              <div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500">QTY:{entry.quantity}</p>
                                  <div className="flex">
                                  <button type="button" 
                                  onClick={() => removeItem(entry.id)}
                                  className="font-medium text-primary hover:text-primary/80">
                                  Remove
                                  </button>
                                  </div>
                                </div>
                              </div>
                                
                            </div>

                        </li>
                    ))}
                    </>
                )}
            </ul>
            </div>
            <div className="border-t border-gray-200 px-4 sm:px-6">
            <div className="py-4 flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal:</p>
                <p>${totalPrice}</p>
            </div>
            <p className="mt-0.5 text-gray-500">Shipping and texes calculated at checkout.</p>
            <div className="mt-6">
              <Button className="w-full">
                  checkout
              </Button>

            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                OR <button onClick={() =>handleCartClick()} className="font-medium text-primary hover:text-primary/88">Continue Shopping</button>
              </p>
            </div>
            </div>
        </div>
      </SheetContent>
    </Sheet>
    )
}
