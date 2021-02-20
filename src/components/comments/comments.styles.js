import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/core";

export const CommentsContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.baseLineHeight * 3}rem;
  `}
`;

export const CommentsWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.baseLineHeight / 2}rem;
  `}
`;

const spin = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingText = styled.p`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    position: relative;
    text-align: center;
    font-family: ${theme.sansSerif};

    &:before {
      content: "";
      display: block;
      left: 0;
      width: 1em;
      height: 1em;
      margin-right: 0.5em;
      border-radius: 50%;
      border: 1px solid ${theme.lightColor};
      border-top: 1px solid ${theme.primaryColor};
      animation: ${spin} 0.4s linear infinite;
    }
  `}
`;

export const Heading = styled.h5`
  span:first-child {
    transform: translateY(1.5px);
  }

  @media (min-width: 580px) {
    margin-left: 20px;
  }
`;

export const HeadingTitle = styled.span`
  margin-left: 16px;
`;
