import { createClient } from "../../prismic";
import Meta from "@/components/Meta";
import PostTextSnippet from "@/components/PostTextSnippet";

export default function News({ page, posts }) {
	const { featured_post, page_title } = page.data;
	return (
		<>
			<Meta title="News & Updates" />
			<h1 className="page-title">{page_title[0].text}</h1>
			<div className="news">
				<div className="news__main">
					<div className="news__featured">
						<p className="news__featured__eyebrow">Featured</p>
						<PostTextSnippet
							post={featured_post}
							prefix="news__featured__post"
						/>
					</div>
					<div className="news__latest">
						<p className="news__latest__eyebrow">LATEST NEWS</p>
						<div className="news__latest__posts">
							{posts.map((post) => (
								<PostTextSnippet
									post={post}
									prefix="news__post"
									key={post.id}
								/>
							))}
						</div>
					</div>
				</div>

				<div className="social">
					<h3 className="social__title">Facebook Updates</h3>
					<iframe
						title="facebook feed"
						name="facebook feed"
						src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmahipono%2F%20&amp;tabs=timeline&amp;width=340&amp;height=1000&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=true&amp;show_facepile=true&amp;appId"
						height="1000"
						data-adapt-container-width="true"
						frameBorder="0"
						allowtransparency="true"
						allow="encrypted-media"
						className="social__embed"
					></iframe>
				</div>
			</div>
		</>
	);
}

export async function getStaticProps({ previewData }) {
	const client = createClient({ previewData });

	const page = await client.getSingle("news_and_updates", {
		fetchLinks: [
			"post.title",
			"post.description",
			"post.release_date",
			"post.source",
			"post.featured_image",
		],
	});
	const posts = await client.getAllByType("post");
	return {
		props: { page, posts },
	};
}
