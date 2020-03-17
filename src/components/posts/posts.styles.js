import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -${theme.baseLineHeight / 4}rem;
  `}
`;

export const PostItem = styled.div`
  ${({ theme }) => css`
    flex: 0 0 calc(100% / 3 - ${theme.baseLineHeight / 2}rem);
    margin: 0 ${theme.baseLineHeight / 4}rem ${theme.baseLineHeight / 2}rem
      ${theme.baseLineHeight / 4}rem;

    @media (max-width: 1100px) {
      flex: 0 0 calc(50% - ${theme.baseLineHeight / 2}rem);
    }

    @media (max-width: 650px) {
      flex: 0 0 calc(100% - ${theme.baseLineHeight / 2}rem);
    }
  `}
`;
