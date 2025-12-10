import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/client";
import { createClient, linkResolver } from "../prismic";
import Meta from "@/components/Meta";
import { components } from "@/slices/index";

export default function Page({ page }) {
	const { page_title, body } = page.data;
	return (
		<>
			<Meta title={page_title[0].text} />
			<SliceZone slices={body} components={components} />
		</>
	);
}

export async function getStaticProps({ params, previewData }) {
	const client = createClient({ previewData });

	const page = await client.getByUID("page", params.page);

	return {
		props: { page },
	};
}

export async function getStaticPaths() {
	const client = createClient();
	const documents = await client.getAllByType("page");
	const filteredDocs = documents.filter((doc) => {
		return doc.uid !== "home";
	});

	const paths = filteredDocs.map((doc) => prismicH.asLink(doc, linkResolver));

	return {
		paths,
		fallback: false,
	};
}
