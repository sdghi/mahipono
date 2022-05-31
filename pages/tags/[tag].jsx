import { createClient } from "../../prismic";
import Meta from "@/components/Meta";
import PostTextSnippet from "@/components/PostTextSnippet";

export default function News({ tag, posts }) {
	return (
		<>
			<Meta title={tag} />
			<h1 className="page-title">Filtered By Tag: {tag}</h1>
			<div className="news">
				<div className="news__main">
					<div className="news__latest">
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
			</div>
		</>
	);
}

export async function getServerSideProps({ params, previewData }) {
	const client = createClient({ previewData });

	const posts = await client.getByTag(params.tag);

	return {
		props: { tag: params.tag, posts: posts.results },
	};
}
