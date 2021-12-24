import { interpolateObject } from 'd3-interpolate';

const createInterpolator = ({ points }) => {
  const [start, finish] = points;
  return interpolateObject(start.style, finish.style);
};

export default createInterpolator;
