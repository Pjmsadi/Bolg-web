import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const Client = createClient({
    projectId:'5dkykzbi',
    dataset: 'production',
    apiVersion: '2023-05-03',
    useCdn: true,
});

const builder = imageUrlBuilder(Client);

export const urlFor = (source: SanityImageSource) => {
    return builder.image(source);
}
