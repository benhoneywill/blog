import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const Token = styled.span`
  ${({ theme, loaded }) => css`
    ${!loaded &&
      css`
        color: ${theme.textColor} !important;
        color: var(--textColor) !important;
      `}

    &:last-child:after {
      content: "";
      display: inline-block;
      width: 1rem;
    }
  `}
`;

export const Pre = styled.pre`
  ${({ theme }) => css`
    background-color: ${theme.codeBackgroundColor} !important;
    background-color: var(--codeBackgroundColor) !important;
  `}
`;
