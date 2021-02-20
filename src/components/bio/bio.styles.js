import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/core";

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 4.8rem;
    height: 4.8rem;
    flex-shrink: 0;
    margin-bottom: ${theme.baseLineHeight / 2}rem;

    .gatsby-image-wrapper {
      width: 4.8rem !important;
      height: 4.8rem !important;
    }
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Header = styled.h2`
  ${({ theme }) => css`
    margin-top: 0;
    max-width: 700px;
    margin-bottom: ${theme.baseLineHeight / 2}rem;
  `}
`;

export const Wave = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    margin-top: 0;
    max-width: 550px;
    margin-bottom: ${theme.baseLineHeight / 2}rem;
  `}
`;

export const SocialIcons = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialIconItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0.2rem 0.5rem;
`;

export const SocialIconLink = styled.a`
  display: inline-flex;
  align-items: center;
  transition: opacity 0.1s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  svg {
    transition: fill 0.2s ease-out;
  }
`;
