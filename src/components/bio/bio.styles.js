import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    border-radius: 50%;
    overflow: hidden;
    width: 4.8rem;
    height: 4.8rem;
    flex-shrink: 0;
    margin-bottom: ${theme.baseLineHeight / 2}rem;

    @media (min-width: 600px) {
      margin-right: ${theme.baseLineHeight}rem;
    }
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 4rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Text = styled.p`
  ${({ theme }) => css`
    margin-top: 0;
    margin-bottom: ${theme.baseLineHeight / 2}rem;
  `}
`;

export const SocialIcons = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const SocialIconItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0.2rem 1rem 0.2rem 0;

  @media (max-width: 600px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const SocialIconLink = styled.a`
  display: inline-flex;
  align-items: center;
`;
