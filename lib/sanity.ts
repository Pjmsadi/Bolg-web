import { createClient } from "@sanity/client";

// Sanity client configuration
export const client = createClient({
  projectId: "5dkykzbi", // Replace with your project ID
  dataset: "production", // Replace with your dataset
  apiVersion: "2023-01-01",
  useCdn: true,
});

// URL builder function
const builder = imageUrlBuilder(client);
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const urlFor = (source: SanityImageSource) => {
    return builder.image(source);
};
