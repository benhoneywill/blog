import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Button = styled.button`
  ${({ theme }) => css`
    font-family: ${theme.sansSerif};
    font-weight: ${theme.boldFontWeight};
    font-size: 1rem;
    height: ${theme.baseLineHeight * 1.5}rem;
    padding: 0 ${theme.baseLineHeight}rem;
    border: none;
    cursor: pointer;
    color: ${theme.primaryContrastColor};
    color: var(--primaryContrastColor);
    background-color: ${theme.primaryColor};
    background-color: var(--primaryColor);
    transition: filter 0.2s ease-out, color 0.2s ease-out;
    border-radius: 3px;
    box-shadow: ${theme.shadowColor} 0px 3px 8px;

    &:hover {
      filter: brightness(110%);
    }

    &:active {
      filter: brightness(90%);
    }
  `}
`;

export default Button;
