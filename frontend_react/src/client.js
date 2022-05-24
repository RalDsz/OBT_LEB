import sanityClient from "@sanity/client";
import ImgUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: 't6nwmhla',
    dataset: "production",
    apiVersion: "2022-02-01", // add the Sanity API version you wish to use
    useCdn: true,
    token: 'skR0yPGv0IQm5nXKh343vhnwuy2SO7KMaeT5R285VrDSecAN69y2yoyFPbAdY14PTgC9fU0i3PUxGNNxpZuObm8oZCBj7M4f25esl03W4lE0ai2MOuGoIRbLAwVoJDZLThLEtVlZQeVybzEmXoX2Jz4lcYy7nIRGSRSH6Je1hzGLow9ohK69'// or leave blank to be anonymous user
});

const builder = ImgUrlBuilder(client);
export const urlFor = (source) => builder.image(source);