import React from "react";

const Model = ({ step, min, max }) => {
  const [minValue, setMinValue] = React.useState(min);
  const [maxValue, setMaxValue] = React.useState(max);

  const handleMinChange = e => {
    e.preventDefault();
    const value = parseFloat(e.target.value);
    const newMinVal = Math.min(value, maxValue - step);
    setMinValue(newMinVal);
  };

  const handleMaxChange = e => {
    e.preventDefault();
    const value = parseFloat(e.target.value);
    const newMaxVal = Math.max(value, minValue + step);
    setMaxValue(newMaxVal);
  };

  return (
    <>
      <input
        type="range"
        value={minValue}
        min={min}
        max={max}
        step={step}
        onChange={handleMinChange}
      />
      <input
        type="range"
        value={maxValue}
        min={min}
        max={max}
        step={step}
        onChange={handleMaxChange}
      />
    </>
  );
};

export default Model;
