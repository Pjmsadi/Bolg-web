import ImageGallery from "@/app/components/ImageGallery";
import { Client } from "@/lib/sanity"

async function getData(slug: string) {
    const query = `*[_type == "product" && slug.current =="${slug}"][0]{
  _id,
    images,
    price,
    name,
    description,
    "slug":slug.current,
    "categoryName": category->name,
}`;
    const data = await Client.fetch(query);
    return data;
}

interface Params {
  slug: string;
}

interface Props {
  params: Params;
}

export default async function ProductPage({ params }: Props) {
    const productData = await getData(params.slug);
    return(
    <div className="bg-white">
        <div className=" mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2">
            {productData.images && <ImageGallery images={productData.images} />}

            <div className="padding-y-8">

                <div className="mb-2 md:mb-3">

                    <span className="mb-0.5 inline-block text-gray-500">{productData.categoryName}</span>
                    <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{productData.name}</h2>

                </div>
                <div className="mb-6 flex items-center gap-3 md:mb-10">

                </div>

            </div>

            </div>

        </div>

    </div>
     
    )
}