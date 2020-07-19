import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

import Button from "../../../../src/components/button";

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: ${theme.baseLineHeight}rem -1rem ${theme.baseLineHeight * 1.5}rem;
  `}
`;

const ImgContainer = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    height: ${theme.baseLineHeight * 10}rem;
    width: 100%;
    margin-bottom: ${theme.baseLineHeight}rem;
  `}
`;

const Box = styled.div`
  ${({ theme, bg, blur }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    transition: background-color 0.2s ease-out;
    background-color: ${theme.colors.codeBackground};
    font-family: ${theme.fonts.sansSerif};
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    filter: blur(${blur ? '25px' : '0px'});
    transition: ${!blur ? 'filter 0.6s ease-out' : 'none'};
  `}
`;

const Img = ({ src, blur, onChange }) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (typeof onChange === "function") {
      onChange();
    }
  }, [show])

  if (!show) {
    return (
      <Wrapper>
        <ImgContainer>
          <Box>
            <p>Click the button below to load the image</p>
          </Box>
        </ImgContainer>
        <Button onClick={() => setShow(true)}>Load the image</Button>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <ImgContainer>
        <Box blur={blur} bg={src} />
      </ImgContainer>
      <Button onClick={() => setShow(false)}>Reset</Button>
    </Wrapper>
  )
}

export default Img;