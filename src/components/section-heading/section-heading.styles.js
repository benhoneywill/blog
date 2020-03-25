import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const Heading = styled.span`
  ${({ theme }) => css`
    display: inline;
    border-bottom: 2px solid ${theme.colors.text};
    padding-bottom: ${theme.baseLineHeight * 0.25}rem;
  `}
`;

export const Wrapper = styled.h5`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.border};
    padding-bottom: ${theme.baseLineHeight * 0.25}rem;
    margin-bottom: ${theme.baseLineHeight * 0.75}rem;
  `}
`;