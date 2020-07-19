import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Button = styled.button`
  ${({ theme }) => css`
    font-family: ${theme.fonts.sansSerif};
    height: ${theme.baseLineHeight * 1.5}rem;
    padding: 0 ${theme.baseLineHeight / 2}rem;
    border: none;
    cursor: pointer;
    color: ${theme.colors.text};
    border: 1px solid ${theme.colors.border};
    background-color: ${theme.colors.button};
    border-radius: 3px;

    &:hover {
      background-color: ${theme.colors.buttonHover};
    }

    &:active {
      background-color: ${theme.colors.button};
    }
  `}
`;

export default Button;
