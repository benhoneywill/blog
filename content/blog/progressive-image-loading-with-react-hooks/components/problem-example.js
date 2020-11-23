import React from "react";

import src from "../assets/img.jpg";

import Img from "./img";

const ProblemExample = () => {
  const [uncache, setUncache] = React.useState(Date.now());
  return (
    <Img
      src={`${src}?uncache=${uncache}`}
      onChange={() => setUncache(Date.now())}
    />
  );
};

export default ProblemExample;
