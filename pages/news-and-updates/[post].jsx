import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { createClient, linkResolver } from "../../prismic";
import Meta from "@/components/Meta";
import { components } from "@/slices/index";
import formatDate from "@/helpers/formatDate";
import Link from "next/link";

export default function Post({ post }) {
	const { title, release_date, source, featured_image, body } = post.data;
	return (
		<>
			<Meta title={title[0].text} />
			<article className="article">
				<div className="article__hero">
					<div className="article__hero__content">
						<h1 className="article__hero__title">
							{title[0].text}
						</h1>
						<div className="article__hero__published">
							{formatDate(release_date)}
							{source[0] && ` | ${source[0].text}`}
						</div>
						<img
							className="article__hero__image"
							src={featured_image.url}
							alt={featured_image.alt}
						/>
					</div>
				</div>
				<SliceZone slices={body} components={components} />
				{post.tags.length > 0 && (
					<div className="article__tags">
						<div className="article__tags__inner">
							<p className="article__tags__title">Tags:</p>
							<div className="article__tags__container">
								{post.tags.map((tag, i) => (
									<Link key={i} href={`/tags/${tag}`}>
										<a class="article__tags__tag">{tag}</a>
									</Link>
								))}
							</div>
						</div>
					</div>
				)}
			</article>
		</>
	);
}

export async function getStaticProps({ params, previewData }) {
	const client = createClient({ previewData });

	const posts = await client.getAllByType("post");

	const post = posts.filter((post) => {
		return post.slugs[0] == params.post;
	})[0];

	return {
		props: { post },
	};
}

export async function getStaticPaths() {
	const client = createClient();
	const documents = await client.getAllByType("post");

	const paths = documents.map((doc) => prismicH.asLink(doc, linkResolver));

	return {
		paths,
		fallback: false,
	};
}
