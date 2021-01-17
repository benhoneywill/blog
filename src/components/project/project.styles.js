import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Image from "gatsby-image/withIEPolyfill";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    border-top: none;
    padding: ${theme.baseLineHeight / 2}rem 0.25em;
    border-radius: 0 0 3px 3px;
    transition: border-color 0.2s ease-out;
  `}
`;

export const ProjectTitle = styled.h5`
  ${({ theme }) => css`
    margin-top: 0;
    color: ${theme.primaryColor};
    color: var(--primaryColor);
    a {
      color: inherit;
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    margin-bottom: 0;
    margin-top: ${theme.baseLineHeight / 2.25}rem;
  `}
`;

export const ProjectImage = styled(Image)`
  ${({ theme }) => css`
    height: ${theme.baseLineHeight * 5}rem;
    border-radius: 3px;
  `}
`;
