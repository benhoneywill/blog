import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

// Components
import Container from "../components/container";
import Layout from "../components/layout";
import Hero from "../components/hero";

const NotFound = ({ location }) => {
  return (
    <Layout title="404 Not Found" location={location}>
      <Hero title="404" />
      <Container>
        <p style={{ textAlign: "center" }}>
          Sorry, this page does not seem to exist!{" "}
          <Link href="/">Go to the home page</Link>.
        </p>
      </Container>
    </Layout>
  );
};

NotFound.propTypes = {
  location: PropTypes.object.isRequired
};

export default NotFound;
