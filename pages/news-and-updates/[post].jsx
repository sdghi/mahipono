import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { createClient, linkResolver, slugify } from "../../prismic";
import Meta from "@/components/Meta";
import { components } from "@/slices/index";
import formatDate from "@/helpers/formatDate";
import Link from "next/link";
import PostTextSnippet from "@/components/PostTextSnippet";

export default function Post({ post, next }) {
  const { title, release_date, source, featured_image, body } = post.data;

  return (
    <>
      <Meta title={title[0].text} />
      <article className="article">
        <div className="article__hero">
          <div className="article__hero__content">
            <h1 className="article__hero__title">{title[0].text}</h1>
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
                    <a className="article__tags__tag">{tag}</a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="article__next">
          <div className="article__next__wrapper">
            <h2 className="article__next__title">MORE IN NEWS</h2>
            <PostTextSnippet post={next} prefix="article__next__post" />
          </div>
          <img
            className="article__next__illustration"
            src="/illustrations/mountain.svg"
            alt=""
            role="presentation"
          />
        </div>
      </article>
    </>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const posts = await client.getAllByType("post");

  const post = posts.filter((post) => {
    const testSlugMatches = post.slugs[0] == params.post;
    const testTitleMatches = slugify(post.data.title[0].text) === params.post;

    return testSlugMatches || testTitleMatches;
  })[0];

  let nextIndex = posts.indexOf(post) + 1;

  if (nextIndex > posts.length - 1) {
    nextIndex = 0;
  }

  return {
    props: { post, next: posts[nextIndex] },
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
