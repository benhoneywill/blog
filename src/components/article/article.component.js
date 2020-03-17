import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

// Components
import Bio from "../bio";
import Tags from "../tags";
import Container from "../container";

// Styles
import { ArticleWrapper, PublishedAt, MarkdownWrapper } from "./article.styles";

// Queries
import { useSiteUrlQuery } from "./article.queries";

const Article = ({ post }) => {
  const siteUrl = useSiteUrlQuery();

  return (
    <>
      <ArticleWrapper>
        <Container margin={1.5}>
          <PublishedAt>
            Posted on <time>{post.frontmatter.date}</time>
          </PublishedAt>

          <Tags tags={post.frontmatter.tags} margin={0.5} />

          <MarkdownWrapper>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MarkdownWrapper>

          <Tags tags={post.frontmatter.tags} />

          <p>
            Want to leave a comment?{" "}
            <a
              href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
                `${siteUrl}${post.fields.slug}`
              )}`}
            >
              Discuss this article on Twitter.
            </a>
          </p>
        </Container>
      </ArticleWrapper>

      <Container>
        <Bio />

        <p>
          <Link href="/">← Read more</Link>
        </p>
      </Container>
    </>
  );
};

Article.propTypes = {
  post: PropTypes.shape({
    body: PropTypes.string.isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      image: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.object.isRequired
        }).isRequired
      }).isRequired
    }).isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Article;
