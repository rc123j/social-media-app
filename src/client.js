import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-09-09', // Corrected date format
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});


const buider = imageUrlBuilder(client);

export const urlFor = (source) => buider.image(source);