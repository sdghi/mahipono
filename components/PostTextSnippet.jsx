import { PrismicText, PrismicLink } from "@prismicio/react";
import formatDate from "@/helpers/formatDate";
import Link from "next/link";

export default function PostTextSnippet({ post, prefix }) {
	return (
		<div className={`${prefix} post`}>
			<div className="post__content">
				<PrismicLink field={post} className="post__featured__link">
					<h2 className="post__featured__link__title">
						{post.data.title[0].text}
					</h2>
				</PrismicLink>
				<div className="post__meta">
					<div className="post__published">
						{formatDate(post.data.release_date)}
						{post.data.source[0] &&
							` | ${post.data.source[0].text}`}
					</div>
					{post.tags && (
						<div className="post__tags">
							{post.tags.map((tag, i) => (
								<Link key={i} href={`/tags/${tag}`}>
									<a className="post__tags__tag">{tag}</a>
								</Link>
							))}
						</div>
					)}
				</div>
				<div className="post__description">
					<PrismicText field={post.data.description} />
				</div>
			</div>
			<img
				className="post__image"
				src={post.data.featured_image.url}
				alt={post.data.featured_image.alt}
			/>
		</div>
	);
}
