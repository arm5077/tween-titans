import interpolateStyles from './interpolateStyles';
import getPercentage from './getPercentage';

const scrollEventFunction = (opts) => {
  const {
    target,
    waypoints,
    margin,
    targetY,
    viewportHeight,
  } = opts;

  const percentage = getPercentage({ margin, viewportHeight, targetY });
  interpolateStyles({ waypoints, percentage, target });
  console.log(percentage);
};

export default scrollEventFunction;
