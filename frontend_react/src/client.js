import sanityClient from "@sanity/client";
import ImgUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2022-02-01", // add the Sanity API version you wish to use
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = ImgUrlBuilder(client);
export const urlFor = (source) => builder.image(source);