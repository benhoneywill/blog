import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const ImageWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 4.8rem;
  height: 4.8rem;
  flex-shrink: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 4rem;
`;

export const Inner = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.baseLineHeight}rem;
  `}
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
`;

export const SocialIconItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0.2rem 1rem 0.2rem 0;
`;

export const SocialIconLink = styled.a`
  display: inline-flex;
  align-items: center;
`;
