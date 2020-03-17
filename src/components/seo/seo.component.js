import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

// Contexts
import { useTheme } from "../../contexts/theme";

// Queries
import { useSeoQuery } from "./seo.queries";

const SEO = ({ description, lang, meta, keywords, title, image }) => {
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
          content: "summary"
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

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
  description: null,
  image: null
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default SEO;
