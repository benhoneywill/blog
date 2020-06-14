import styled from "@emotion/styled";

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

export const EmojiImg = styled.img`
  max-height: 100%;
  max-width: 100%;
`;
