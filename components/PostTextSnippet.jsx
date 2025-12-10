import { PrismicText, PrismicLink } from "@prismicio/react";
import formatDate from "@/helpers/formatDate";
import formatPostSource from "@/helpers/formatPostSource";
import Link from "next/link";

export default function PostTextSnippet({ post, prefix }) {
	return (
        <div className={`${prefix} post`}>
            <div className="post__content">
				<PrismicLink document={post} className="post__featured__link">
					<h2 className="post__featured__link__title">
						{post.data.title[0].text}
					</h2>
				</PrismicLink>
				<div className="post__meta">
					<div className="post__published">
						{formatDate(post.data.release_date)}
						{formatPostSource(post.data.source)}
					</div>
					{post.tags && (
						<div className="post__tags">
							{post.tags.map((tag, i) => (
								<Link key={i} href={`/tags/${tag}`} className="post__tags__tag">
									{tag}
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
