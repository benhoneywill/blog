import React from "react";
import PropTypes from "prop-types";

// Styles
import { Wrapper, Heading } from "./section-heading.styles";

const SectionHeading = ({ children }) => {
  return (
    <Wrapper>
      <Heading>{children}</Heading>
    </Wrapper>
  );
};

SectionHeading.propTypes = {
  children: PropTypes.string.isRequired
};

export default SectionHeading;
