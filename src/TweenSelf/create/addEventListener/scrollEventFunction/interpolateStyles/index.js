import getTweenPoints from './getTweenPoints';
import getRelativePercent from './getRelativePercent';
import createInterpolator from './createInterpolator';

const interpolateStyles = ({ waypoints, percentage }) => {
  const points = getTweenPoints({ waypoints, percentage });
  const relativePercent = getRelativePercent({
    bounds: [points[0].percent, points[1].percent],
    percentage,
  });
  const interpolator = createInterpolator({ points });
  const result = interpolator(relativePercent);

  return result.style;
};

export default interpolateStyles;
