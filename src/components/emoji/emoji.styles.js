import styled from "@emotion/styled";
import Image from "gatsby-image/withIEPolyfill";

export const Wrapper = styled.span`
  display: inline-block;
  height: 1em;
  width: 1em;

  p &,
  h1 & {
    transform: translateY(0.1em);
  }
`;

export const EmojiImg = styled(Image)`
  height: 100%;
  width: 100%;
  display: block;
`;
