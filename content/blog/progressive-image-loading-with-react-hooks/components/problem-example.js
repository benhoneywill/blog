import React from "react";

import src from "../assets/img.jpg";

import Img from "./img";

const ProblemExample = () => {
  const [uncache, setUncache] = React.useState(0);
  return <Img src={src + `?uncache=${uncache}`} onChange={() => setUncache(uncache + 1)} />
}

export default ProblemExample;
