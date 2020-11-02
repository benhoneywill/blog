import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Container = styled.div`
  ${({ theme }) => css`
    height: ${theme.baseLineHeight * 2.5}rem;
    margin-bottom: ${theme.baseLineHeight * 2.5}rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 450px;
    margin: 0 auto;
  `}
`;

export default Container;
