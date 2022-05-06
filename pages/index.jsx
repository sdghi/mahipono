import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismic";
import styles from "../styles/Home.module.css";
import Meta from "@/components/Meta";
import { components } from "@/slices/index";

export default function Home({ page }) {
	const { page_title, body } = page.data;
	return (
		<div className={styles.container}>
			<Meta title={page_title[0].text} />
			<h1>{page_title[0].text}</h1>
			<SliceZone slices={body} components={components} />
		</div>
	);
}

export async function getStaticProps({ previewData }) {
	const client = createClient({ previewData });

	const page = await client.getByUID("page", "home");
	return {
		props: { page },
	};
}
