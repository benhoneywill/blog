import styled from "@emotion/styled";
import { css } from "@emotion/core";
import PropTypes from "prop-types";

const Container = styled.div`
  ${({ theme, maxWidth, padding, margin, bg, padded }) => css`
    margin: ${margin * theme.baseLineHeight}rem auto;
    padding: ${padding * theme.baseLineHeight}rem ${padded ? "1em" : "0"};
    background: ${bg};
    max-width: ${maxWidth};
    transition: background 0.2s ease-out;
  `}
`;

Container.defaultProps = {
  maxWidth: "36rem",
  bg: "transparent",
  padding: 0,
  margin: 2,
  padded: true
};

Container.propTypes = {
  maxWidth: PropTypes.string,
  bg: PropTypes.string,
  padding: PropTypes.number,
  margin: PropTypes.number,
  padded: PropTypes.bool
};

export default Container;
