"use client"; 

import { urlFor } from "@/lib/sanity";
import Image from 'next/image';
import { useState } from 'react';

interface Image {
    _id: string;
    url: string;
    caption: string;
}

export default function ImageGallery({images}: {images: Image[]}) {
const [bigImage, setImage] = useState<Image>(images[0]);

const handleSmallImageClick = (image: Image) => {
    setImage(image);
}


return(
    <div className="grid gap-4 lg:grid-cols-5">
        <div className="order-last flex-gap-4 lg:order-none lg:flex-col">
        {images.map((image: Image, idx: number) => (
            <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
            <Image src={urlFor(image).url()} width={200} height={200} alt="photo"
             className=" object-cover object-center cursor-pointer" 
            onClick={() => handleSmallImageClick(image)} />
            </div>
        ))}
        </div>
        <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image src={urlFor(bigImage).url()} width={800} height={800} alt="photo" className=" object-cover object-center cursor-pointer" />
        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white ">{bigImage.caption}
        SALE
        </span>
        </div>
    </div>
)
}