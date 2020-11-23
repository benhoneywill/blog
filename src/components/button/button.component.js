import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Button = styled.button`
  ${({ theme }) => css`
    font-family: ${theme.sansSerif};
    height: ${theme.baseLineHeight * 1.5}rem;
    padding: 0 ${theme.baseLineHeight / 2}rem;
    border: none;
    cursor: pointer;
    color: ${theme.textColor};
    color: var(--textColor);
    border: 1px solid ${theme.borderColor};
    border: 1px solid var(--borderColor);
    background-color: ${theme.buttonColor};
    background-color: var(--buttonColor);
    transition: background-color 0.2s ease-out, color 0.2s ease-out;
    border-radius: 3px;

    &:hover {
      background-color: ${theme.buttonHoverColor};
      background-color: var(--buttonHoverColor);
    }

    &:active {
      background-color: ${theme.buttonColor};
      background-color: var(--buttonColor);
    }
  `}
`;

export default Button;
