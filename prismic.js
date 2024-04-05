import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import sm from "./sm.json";

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);

export function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim leading/trailing white space
  str = str.toLowerCase(); // convert string to lowercase
  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove any non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
  return str;
}

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case "page":
      if (doc.uid === "home") return "/";
      return `/${doc.uid}`;
    case "post":
      let slug = doc.uid;
      // If there's no slug value, convert the title
      // to a slug value
      if (!slug) {
        const title = doc?.data.title[0].text;
        slug = slugify(title);
      }
      return `/news-and-updates/${slug}`;
    default:
      return `/${doc.uid}`;
  }
}

// This factory function allows smooth preview setup
export function createClient(config = {}) {
  const client = prismic.createClient(endpoint, {
    ...config,
  });

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
}
