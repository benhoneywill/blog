import React from "react";
import { Link } from "gatsby";

// Components
import SEO from "../components/seo";
import Container from "../components/container";
import PageHeader from "../components/page-header";

const NotFound = () => {
  return (
    <>
      <SEO title="404 Not Found" />
      <Container>
        <PageHeader />
        <h1>404</h1>
        <p>
          Sorry, that page does not seem to exist!{" "}
          <Link href="/">Go to the home page</Link>.
        </p>
      </Container>
    </>
  );
};

export default NotFound;
