import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const THUMB_SIZE = 16;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 ${THUMB_SIZE / 2}px;
  padding-top: 1.6rem;
  height: calc(${THUMB_SIZE}px + 1.6rem);
`;

const AbsoluteWrapper = styled.div`
  width: ${({ control }) =>
    control ? `100%` : `calc(100% + ${THUMB_SIZE}px)`};
  margin: ${({ control }) => (control ? `0` : `0 -${THUMB_SIZE / 2}px`)};
  position: absolute;
  height: ${THUMB_SIZE}px;
`;

const inputThumbStyles = css`
  pointer-events: all;
  width: ${THUMB_SIZE}px;
  height: ${THUMB_SIZE}px;
  border-radius: 0px;
  border: 0 none;
  background: red;
  cursor: grab;
  -webkit-appearance: none;

  &:active {
    cursor: grabbing;
  }
`;

const inputTrackStyles = css`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  border: transparent;
`;

const Input = styled.input`
  position: absolute;
  width: 100%;
  pointer-events: none;
  appearance: none;
  height: 100%;
  opacity: 0;
  z-index: 3;

  &::-ms-track {
    ${inputTrackStyles}
  }

  &::-moz-range-track {
    ${inputTrackStyles}
  }

  &:focus::-webkit-slider-runnable-track {
    ${inputTrackStyles}
  }

  &::-ms-thumb {
    ${inputThumbStyles}
  }

  &::-moz-range-thumb {
    ${inputThumbStyles}
  }

  &::-webkit-slider-thumb {
    ${inputThumbStyles}
  }
`;

const Rail = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  height: 6px;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.light};
`;

const InnerRail = styled.div`
  position: absolute;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  opacity: 0.5;
  left: ${({ left }) => `${left}%`};
  right: ${({ right }) => `${100 - right}%`};
`;

const Control = styled.div`
  width: ${THUMB_SIZE}px;
  height: ${THUMB_SIZE}px;
  border-radius: 50%;
  position: absolute;
  background: ${({ theme }) => theme.colors.primary};
  top: 50%;
  margin-left: -${THUMB_SIZE / 2}px;
  transform: translate3d(0, -50%, 0);
  left: ${({ pos }) => `${pos}%`};
  z-index: 2;

  &:before {
    content: ${({ label }) => `'${label}'`};
    font-weight: bold;
    position: absolute;
    font-size: 0.75em;
    top: -${THUMB_SIZE * 2}px;
    left: 50%;
    transform: translateX(-50%);
    font-family: ${({ theme }) => theme.fonts.sansSerif};
  }
`;

const RangeSlider = ({ min, max, value, step, onChange, formatLabel }) => {
  const [minValue, setMinValue] = React.useState(value ? value.min : min);
  const [maxValue, setMaxValue] = React.useState(value ? value.max : max);

  React.useEffect(() => {
    if (value) {
      setMinValue(value.min);
      setMaxValue(value.max);
    }
  }, [value]);

  const handleMinChange = e => {
    e.preventDefault();
    const newMinVal = Math.min(+e.target.value, maxValue - step);
    if (!value) setMinValue(newMinVal);
    onChange({ min: newMinVal, max: maxValue });
  };

  const handleMaxChange = e => {
    e.preventDefault();
    const newMaxVal = Math.max(+e.target.value, minValue + step);
    if (!value) setMaxValue(newMaxVal);
    onChange({ min: minValue, max: newMaxVal });
  };

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <Wrapper>
      <AbsoluteWrapper>
        <Input
          type="range"
          value={minValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMinChange}
        />
        <Input
          type="range"
          value={maxValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMaxChange}
        />
      </AbsoluteWrapper>

      <AbsoluteWrapper control>
        <Control type="min" pos={minPos} label={formatLabel(minValue)} />
        <Rail>
          <InnerRail left={minPos} right={maxPos} />
        </Rail>
        <Control type="max" pos={maxPos} label={formatLabel(maxValue)} />
      </AbsoluteWrapper>
    </Wrapper>
  );
};

RangeSlider.defaultProps = {
  value: null,
  step: 1,
  formatLabel: val => val,
  onChange: () => {}
};

RangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.shape({ min: PropTypes.number, max: PropTypes.number }),
  formatLabel: PropTypes.func
};

export default RangeSlider;
