import { linkResolver, createClient } from "../../prismic";
import { setPreviewData, redirectToPreviewURL } from "@prismicio/next";

export default async (req, res) => {
	const client = createClient({ req });
	await setPreviewData({ req, res });
	await redirectToPreviewURL({ req, res, client, linkResolver });
};
