import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";
import Link from "next/link";

// Fetch data from Sanity
async function getData() {
  try {
    const query = `*[_type == "heroimages"][0]`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching hero images:", error);
    return null;
  }
}

// Reusable Navigation Link
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center w-full md:w-auto px-4 py-2 font-semibold text-gray-600 transition duration-100 hover:text-primary active:bg-gray-200"
    >
      {label}
    </Link>
  );
}

// Reusable Hero Image
function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-1/2 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:w-1/3 lg:w-1/2">
      <Image
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-center"
        width={500}
        height={500}
        priority
      />
    </div>
  );
}

// Hero Section Component
export default async function Hero() {
  const data = await getData();

  if (!data) {
    return (
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xl font-semibold text-gray-500">Failed to load hero content.</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Main Section */}
      <div className="mb-8 flex flex-col-reverse items-center justify-between md:mb-16 md:flex-row">
        {/* Text Content */}
        <div className="mb-6 flex w-full flex-col justify-center text-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48 md:text-left">
          <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-5xl lg:text-6xl">
            Top fashion for a top price!
          </h1>
          <p className="mx-auto max-w-md leading-relaxed text-gray-500 sm:text-lg lg:text-xl md:mx-0">
            &quot;Discover the latest trends in men&rsquo;s and women&rsquo;s fashion at StyleSphere. From chic clothing to trendy footwear, we bring you a curated collection to express your unique style. Shop quality, comfort, and elegance all in one place!&quot;
          </p>
        </div>

        {/* Images Section */}
        <div className="relative mb-12 flex w-full justify-center gap-4 md:mb-16 lg:w-2/3 lg:justify-end">
          <HeroImage src={urlFor(data.image1).url()} alt="Fashionable outfits" />
          <HeroImage src={urlFor(data.image2).url()} alt="Trendy footwear" />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <NavLink href="/Men" label="Men" />
        <NavLink href="/Women" label="Women" />
        <NavLink href="/Teens" label="Teens" />
      </div>
    </section>
  );
}
