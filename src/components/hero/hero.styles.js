import styled from "@emotion/styled";
import { css } from "@emotion/core";

import Container from "../container";

export const HeroContainer = styled(Container)`
  ${({ theme }) => css`
    background-color: ${theme.heroColor};
    background-color: var(--heroColor);
  `}
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    margin-bottom: ${theme.baseLineHeight * 2}rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 950px;
  `}
`;
