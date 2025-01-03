
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Sanity client configuration
export const client = createClient({
  projectId: "5dkykzbi", // Replace with your project ID
  dataset: "production", // Replace with your dataset
  apiVersion: "2023-01-01",
  useCdn: true,
});

// URL builder function
const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => {
    return builder.image(source);
};
