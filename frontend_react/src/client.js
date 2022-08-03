//CODE BY RalDSZ
//Copyright :ORBT TECHNOLOGIES all rights reserved
//Last modified : 03/08/22

import sanityClient from "@sanity/client";
import ImgUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: 'qb8937t7',
    dataset: "production",
    apiVersion: "2022-02-01", // add the Sanity API version you wish to use
    useCdn: true,
    token: 'sko1Pw0aDi7BhizVXQblSg0HqWhKfiFLFLa0AV7053x0yGLnTsgjgAyYzTQfu3mWU9zGh4AJqisVZX0PwG3Y9JWHVyYwOk1UBJdPMWlMO7Ax3K3Ofn0QV6qamszAN1C7LlcxrszBjUPoduvGEd1TLjHBZzgI0050W2y8m3akZmbIStAzEYGd'// or leave blank to be anonymous user
});

const builder = ImgUrlBuilder(client);
export const urlFor = (source) => builder.image(source);