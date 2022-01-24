import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Container = styled.div`
  ${({ theme }) => css`
    height: ${theme.baseLineHeight * 3}rem;
    padding: ${theme.baseLineHeight * 0.5}rem;
    margin: ${theme.baseLineHeight * 1.5}rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.lightColor};
    background: var(--lightColor);
    border-radius: 5px;
  `}
`;

export default Container;
