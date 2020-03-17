import styled from "@emotion/styled";
import { css } from "@emotion/core";
import PropTypes from "prop-types";

const Container = styled.div`
  ${({ theme, maxWidth, padding, margin, bg, absolute }) => css`
    margin: ${margin * theme.baseLineHeight}rem auto;
    padding: ${padding * theme.baseLineHeight}rem 1em;
    background: ${bg};
    position: ${absolute ? "absolute" : "static"};
    width: ${absolute ? "100%" : "auto"};
    max-width: ${maxWidth};
    transition: background 0.2s ease-out;
    z-index: 2;
  `}
`;

Container.defaultProps = {
  maxWidth: "36rem",
  bg: "transparent",
  padding: 0,
  margin: 2,
  absolute: false
};

Container.propTypes = {
  maxWidth: PropTypes.string,
  bg: PropTypes.string,
  padding: PropTypes.number,
  margin: PropTypes.number,
  absolute: PropTypes.bool
};

export default Container;
