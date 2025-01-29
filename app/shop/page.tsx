import { client } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
interface SimplifyProduct {
  _id: string;
  imageUrl: string;
  price: number;
  name: string;
  slug: string;
  categoryName: string;
}

async function getData() {
  const query = `*[_type == "product"]{
  _id,
    "imageUrl": images[0].asset->url,
  price,
    name,
    "slug": slug.current,
    "categoryName": category->name 
}`;
  const data = await client.fetch(query);

  return data;
}

export default async function AllProducts({

}: {
  params?: string;
}) {
  const data: SimplifyProduct[] = await getData();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between ">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {" "}
            Our All Products 
          </h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  width={300}
                  height={300}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link
                      href={`/product/${product.slug}`}
                      className="font-medium text-gray-900"
                    >
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.categoryName}
                  </p>
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