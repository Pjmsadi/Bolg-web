
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";
async function getData() {
    const query = `*[_type == "heroimages"][0]`

    const data = await client.fetch(query)

    return data
}

export default async function Hero() {

const data = await getData()
    return (
       <section className="mx-auto mx-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <div className="mb-8 flex flex-warp justify-between md:mb-16">
            <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lgg:pb-24 lg:pt-48">
            <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:text-6xl">Top fashion for a top price!</h1>
            <p className="max-w-wd leading-relaxed text-gray-500 xl:text-lg">&quot;Discover the latest trends in men&rsquo;s and women&rsquo;s fashion at StyleSphere.
            From chic clothing to trendy footwear, we bring you a curated collection to express your unique style. Shop quality, comfort, and elegance all in one place!&quot;
            </p>
            </div>
            <div className="mb:12 flex w-full md:mb-16 lg:w-2/3">
            <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image src={urlFor(data.image1).url()}
            alt="Hero Image"
            className="h-full w-full object-cover object-center"
            width={500}
            height={500}
            />
            </div>
            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <Image  src={urlFor(data.image2).url()}
            alt="Hero Image"
            className="h-full w-full object-cover object-center"
            width={500}
            height={500}
            priority/>

         </div>
        </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
            <a href="/Men" className="flex items-center justify-center w-1/2 font-semibold text-gray-600 transition duration-100 hover:text-primary active:bg-gray-200">Men
            </a>
            <a href="/Women" className="flex items-center justify-center w-1/2 font-semibold text-gray-600 transition duration-100 hover:text-primary active:bg-gray-200">Women
            </a>
            <a href="/Teens" className="flex items-center justify-center w-1/2 font-semibold text-gray-600 transition duration-100 hover:text-primary active:bg-gray-200">Teens
            </a>

        </div>
        </div>
       </section>
    );
}