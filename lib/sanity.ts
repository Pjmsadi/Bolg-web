import { createClient, SanityClient } from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url'; 

export const Client = createClient({
    projectId:'5dkykzbi',
    dataset: 'production',
    apiVersion: '2023-05-03',
    useCdn: true,
});

const builder = ImageUrlBuilder(Client)

export const urlFor = (source: any) => {
    return builder.image(source);
}
