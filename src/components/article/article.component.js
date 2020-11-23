import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

// Components
import Bio from "../bio";
import Comments from "../comments";
import Tags from "../tags";
import Container from "../container";
import Emoji from "../emoji";

// Icons
import TwitterIcon from "../../icons/twitter.svg";

// Styles
import {
  ArticleWrapper,
  PublishedAt,
  MarkdownWrapper,
  ArticleImage,
  ArticleTagline,
  CenteredParagraph,
  ShareLink
} from "./article.styles";

// Queries
import { useSiteUrlQuery } from "./article.queries";

const Article = ({ post }) => {
  const siteUrl = useSiteUrlQuery();
  const [showShareLink, setShowShareLink] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 800) {
        setShowShareLink(true);
      } else {
        setShowShareLink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tweetMsg = `${post.frontmatter.title}\n\n${post.frontmatter.tagline}\n\nBy @benhoneywill\n\n${siteUrl}${post.fields.slug}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${escape(tweetMsg)}`;

  return (
    <>
      <ArticleWrapper>
        <ShareLink
          title="Share on Twitter"
          href={tweetUrl}
          rel="noreferrer"
          target="_blank"
          show={showShareLink}
        >
          <TwitterIcon fill="#00acee" height="1.6rem" width="1.6rem" />
        </ShareLink>

        <Container margin={1}>
          <PublishedAt>
            Posted on <time>{post.frontmatter.date}</time>
          </PublishedAt>

          <Tags tags={post.frontmatter.tags} margin={0.5} />

          <ArticleTagline>{post.frontmatter.tagline}</ArticleTagline>
        </Container>

        <Container padded={false} maxWidth="38rem">
          <ArticleImage fluid={post.frontmatter.image.childImageSharp.fluid} />
        </Container>

        <Container margin={1}>
          <MarkdownWrapper>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MarkdownWrapper>

          <Tags align="center" tags={post.frontmatter.tags} />

          <CenteredParagraph>
            <TwitterIcon
              fill="#00acee"
              height="1em"
              width="1em"
              style={{ transform: "translateY(0.1em)", marginRight: "0.3em" }}
            />
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
                `${siteUrl}${post.fields.slug}`
              )}`}
            >
              Discuss this article on Twitter
            </a>
          </CenteredParagraph>

          <Comments title={post.frontmatter.title} />
        </Container>
      </ArticleWrapper>

      <Container>
        <Bio />

        <CenteredParagraph>
          <Emoji emoji="🏠" label="Home" />{" "}
          <Link to="/">Back to home page</Link>
        </CenteredParagraph>
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
      tagline: PropTypes.string.isRequired,
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
