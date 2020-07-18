import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Button = styled.button`
  ${({ theme }) => css`
    font-family: ${theme.fonts.sansSerif};
    height: ${theme.baseLineHeight * 1.5}rem;
    padding: 0 ${theme.baseLineHeight / 2}rem;
    cursor: pointer;
  `}
`;

export default Button;
