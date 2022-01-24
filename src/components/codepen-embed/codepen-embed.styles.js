import { css } from "@emotion/core";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0;
    margin: ${theme.baseLineHeight * 2}rem -1rem;
  `}
`;

export const CodepenIframe = styled.iframe`
  width: 100%;
`;
