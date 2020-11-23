import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const Heading = styled.span`
  ${({ theme }) => css`
    display: inline;
    border-bottom: 2px solid ${theme.textColor};
    border-bottom: 2px solid var(--textColor);
    padding-bottom: ${theme.baseLineHeight * 0.25}rem;
  `}
`;

export const Wrapper = styled.h5`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.borderColor};
    border-bottom: 1px solid var(--borderColor);
    padding-bottom: ${theme.baseLineHeight * 0.25}rem;
    margin-bottom: ${theme.baseLineHeight * 0.75}rem;
  `}
`;
