import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import sm from "./sm.json";

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
	switch (doc.type) {
		case "page":
			if (doc.uid === "home") return "/";
			return `/${doc.uid}`;
		case "post":
			return `/news-and-updates/${doc.slug}`;
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
