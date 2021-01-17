import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const Wrapper = styled.div`
  ${({ theme, marginTop }) => css`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -${theme.baseLineHeight / 4}rem;
    margin-top: ${theme.baseLineHeight * marginTop}rem;
  `}
`;

export const ProjectItem = styled.div`
  ${({ theme }) => css`
    flex: 0 0 33.333%;
    max-width: 33.333%;
    padding: 0 ${theme.baseLineHeight / 4}rem ${theme.baseLineHeight}rem
      ${theme.baseLineHeight / 4}rem;

    @media (max-width: 1100px) {
      flex: 0 0 50%;
      max-width: 50%;
    }

    @media (max-width: 650px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
  `}
`;
