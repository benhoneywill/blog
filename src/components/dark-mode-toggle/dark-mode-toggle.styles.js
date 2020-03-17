import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const Button = styled.button`
  ${({ darkMode, theme }) => css`
    appearance: none;
    cursor: pointer;
    background: ${darkMode ? "#000000" : "#fefefe"};
    height: 30px;
    width: 60px;
    border-radius: 30px;
    position: relative;
    padding: 0 8px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: ${darkMode ? "flex-end" : "flex-start"};
    transition: background 0.2s ease-out, opacity 0.1s ease-in-out;

    &:after {
      content: "";
      position: absolute;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: ${darkMode ? "#333" : "#c7c7c7"};
      top: -1px;
      left: 0;
      transform: translateX(${darkMode ? "0" : "28px"});
      transition: transform 0.2s ease-out;
    }

    &:focus {
      outline: none;
      &:after {
        box-shadow: inset 0px 0px 0px 2px ${theme.colors.primary};
      }
    }

    &:hover {
      opacity: 0.8;
    }

    svg {
      width: 15px;
      height: 15px;
    }
  `}
`;
