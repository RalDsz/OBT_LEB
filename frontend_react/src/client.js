//CODE BY RalDSZ
//Copyright :ORBT TECHNOLOGIES all rights reserved
//Last modified : 03/08/22

import sanityClient from "@sanity/client";
import ImgUrlBuilder from "@sanity/image-url";




export const client = sanityClient({

    projectId: 'qb8937t7',
    dataset: "production",
    apiVersion: "2022-02-01", // use the new version of the API
    useCdn: true,
    token: 'skt3636knxTdIDrg7lCCWst7OSFugmY3EObGVFPFKcxBXjCTLti3WxL7ZnUnXWmPk7NNezxtuhUxWStCMqFQwu8H19jwoN0OcSEEa0Izy0zSJNJViJluD4zUrPITZYR7nUSxo2cgEQtCpNb8tHG5qTWcZNsXMaTg0a3Wvj6TTsRVtNGfcVNT'
});

const builder = ImgUrlBuilder(client);
export const urlFor = (source) => builder.image(source);