import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";

export const List = styled.div`
  display: flex;
  margin: -0.8rem 0;
`;

export const Tag = styled(Link)`
  ${({ darkMode }) => css`
    text-decoration: none;
    background-color: ${darkMode
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.1)"};
    color: ${darkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)"};
    display: inline-flex;
    align-items: center;
    padding: 0 15px;
    height: 1.6rem;
    border-radius: 4px;
    font-size: 0.75rem;
    margin-right: 10px;
    font-family: "Lato", sans-serif;
    font-weight: bold;
    transition: opacity 0.1s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  `}
`;
