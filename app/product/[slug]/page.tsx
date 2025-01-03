import ImageGallery from "@/app/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanity"
import { Star } from "lucide-react";

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
    const data = await client.fetch(query);
    return data;
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
    const data = await getData(params.slug);
    return(
    <div className="bg-white">
        <div className=" mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2">
            <ImageGallery images={data.images} />

            <div className="md:py-8">

                <div className="mb-2 md:mb-3">

                    <span className="mb-0.5 inline-block text-gray-500">
                        {data.categoryName}
                        </span>
                    <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                        {data.name}
                        </h2>

                </div>
                <div className="mb-6 flex items-center gap-3 md:mb-10">
                    <Button>
                        <span>4.2</span>
                        <Star className="h-5 w-5" />
                    </Button>

                </div>

            </div>

            </div>

        </div>

    </div>
     
    )
}