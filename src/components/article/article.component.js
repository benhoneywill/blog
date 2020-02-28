import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

// Components
import Bio from "../bio";
import Tags from "../tags";

// Styles
import { ArticleWrapper, PublishedAt, MarkdownWrapper } from "./article.styles";

const Article = ({ post }) => {
  return (
    <>
      <ArticleWrapper>
        <h1>{post.frontmatter.title}</h1>
        <PublishedAt>
          Posted on <time>{post.frontmatter.date}</time>
        </PublishedAt>
        <Tags tags={post.frontmatter.tags} />

        <MarkdownWrapper>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MarkdownWrapper>

        <Tags tags={post.frontmatter.tags} />

        <p>
          Want to leave a comment?{" "}
          <a
            href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
              `https://benhoneywill.com${post.fields.slug}`
            )}`}
          >
            Discuss this article on Twitter.
          </a>
        </p>
      </ArticleWrapper>

      <Bio />

      <p>
        <Link href="/">← Read more</Link>
      </p>
    </>
  );
};

Article.propTypes = {
  post: PropTypes.shape({
    body: PropTypes.string.isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Article;
