import React from "react";

import smallSrc from "../assets/img-small.jpg";
import bigSrc from "../assets/img.jpg";

import useProgressiveImg from "../hooks/use-progressive-img";

import Img from "./img";

const FinishedExample = () => {
  const [uncache, setUncache] = React.useState(0);
  const [src, { blur }] = useProgressiveImg(smallSrc, bigSrc + `?uncache=${uncache}`);
  console.log(uncache)
  return <Img src={src} blur={blur} onChange={() => setUncache(uncache + 1)} />
}

export default FinishedExample;
