import { Client } from "@/lib/sanity";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type simplyfyProduct = {
  _id: string;
  price: number;
  name: string;
  slug: string;
  categoryName: string;
  imageUrl: string;
};

async function getdata() {
    const query = `*[_type == "product"][0...4] | order(_createdAt desc) {
  _id,
  price,
  name,
  "slug": slug.current,
  "categoryName": category->name,
  "imageUrl": images[0].asset->url
}
`
    
    const data = await Client.fetch(query);
    return data;

}

export default async function Newest() {

      const data:simplyfyProduct [] = await getdata();

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex items-center justify-between ">
               <h2 className="text-2xl font-bold tracking-tight text-gray-900"> Our Newest Products </h2>
                <a className="text-primary flex items-center gap-x-1" href="/all">View all <span><ArrowRight /></span></a>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {data.map((product) => (
                    <div key={product._id} className="group relative">
                    <div className=" aspect-square w-full bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75  xl:h-80">
                      <img
                        src={product.imageUrl}
                        alt= "product name"
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                      <h3 className="text-sm text-gray-700">
                      <Link href={`/product/${product.slug}`} className="font-medium text-gray-900">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.categoryName}</p>
                    <p className="mt-1 text-sm text-gray-500">${product.price}</p>
                      </div>
                   
                </div>
                </div>
              ))}
            </div>
        </div>
    </div>
  );
}
