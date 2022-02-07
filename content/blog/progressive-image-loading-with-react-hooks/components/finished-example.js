import React from "react";

import smallSrc from "../assets/img-small.jpg";
import bigSrc from "../assets/img.jpg";

import useProgressiveImg from "../hooks/use-progressive-img";

import Img from "./img";

const FinishedExample = () => {
  const [uncache, setUncache] = React.useState(Date.now());
  const [src, { blur }] = useProgressiveImg(
    smallSrc,
    `${bigSrc}?uncache=${uncache}`
  );

  return <Img src={src} blur={blur} onChange={() => setUncache(Date.now())} />;
};

export default FinishedExample;
