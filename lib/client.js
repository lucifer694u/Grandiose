import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const config = {
  projectId: '50ejgs12',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);
const builder = imageUrlBuilder(config)

export const urlFor = (source) =>
builder.image(source);
