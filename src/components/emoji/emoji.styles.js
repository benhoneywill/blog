import styled from "@emotion/styled";
import Image from "gatsby-image/withIEPolyfill";

export const Wrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1em;
  width: 1em;

  p &,
  h1 & {
    transform: translateY(0.1em);
  }
`;

export const EmojiImg = styled(Image)`
  max-height: 100%;
  max-width: 100%;
  height: 100%;
  width: 100%;
  display: inline-block;
`;
