import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

// Contexts
import { useTheme } from "../../contexts/theme";

// Queries
import { useSeoQuery } from "./head.queries";

const Head = ({ description, lang, meta, keywords, title, image }) => {
  const { darkMode } = useTheme();
  const { siteMetadata, defaultImage } = useSeoQuery();
  const metaDescription = description || siteMetadata.description;

  const imgPath = image || defaultImage.childImageSharp.fixed.src;
  const imgSrc = `${siteMetadata.siteUrl}${imgPath}`;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      link={[
        {
          href:
            "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400;0,700;1,400&display=swap",
          rel: "stylesheet"
        }
      ]}
      meta={[
        {
          name: "description",
          content: metaDescription
        },
        {
          property: "og:title",
          content: `${title} | ${siteMetadata.title}`
        },
        {
          property: "og:description",
          content: metaDescription
        },
        {
          property: "og:image",
          content: imgSrc
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:image",
          content: imgSrc
        },
        {
          name: "twitter:creator",
          content: siteMetadata.author
        },
        {
          name: "twitter:title",
          content: title
        },
        {
          name: "twitter:description",
          content: metaDescription
        },
        {
          name: "keywords",
          content: keywords.concat(title).join(", ")
        },
        {
          name: "theme-color",
          content: darkMode ? "#191b1f" : "#1E90FF"
        }
      ].concat(meta)}
    />
  );
};

Head.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
  description: null,
  image: null
};

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      property: PropTypes.string,
      content: PropTypes.string.isRequired
    })
  ),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default Head;
