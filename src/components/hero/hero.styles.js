import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const Heading = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    margin-bottom: ${theme.baseLineHeight * 2}rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 950px;
  `}
`;
