import interpolateObject from 'd3-interpolate';
import getTweenPoints from './getTweenPoints';
import getRelativePercent from './getRelativePercent';

const interpolateStyles = ({ waypoints, percentage }) => {
  const points = getTweenPoints({ waypoints, percentage });
  const relativePercent = getRelativePercent({
    bounds: [points[0].percent, points[1].percent],
    percentage,
  });
};

export default interpolateStyles;
