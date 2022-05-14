import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismic";
import Meta from "@/components/meta";
import { components } from "@/slices/index";

export default function Home({ page }) {
	const { page_title, body } = page.data;
	return (
		<>
			<Meta title={page_title[0].text} />
			<SliceZone slices={body} components={components} />
		</>
	);
}

export async function getStaticProps({ previewData }) {
	const client = createClient({ previewData });

	const page = await client.getByUID("page", "home");
	return {
		props: { page },
	};
}
