import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/core";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Button = styled.button`
  ${({ darkMode, theme }) => css`
    appearance: none;
    cursor: pointer;
    background: ${theme.toggleColor};
    background: var(--toggleColor);
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
    font-size: 14px;
    animation: ${fadeIn} 0.2s ease-out;

    &:after {
      content: "";
      position: absolute;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: ${theme.toggleSliderColor};
      background: var(--toggleSliderColor);
      top: -1px;
      left: 0;
      transform: translateX(${darkMode ? "0" : "28px"});
      transition: transform 0.2s ease-out;
    }

    &:focus {
      outline: none;
      &:after {
        box-shadow: inset 0px 0px 0px 2px ${theme.primaryColor};
        box-shadow: inset 0px 0px 0px 2px var(--primaryColor);
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
