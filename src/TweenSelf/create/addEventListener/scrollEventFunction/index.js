import interpolateStyles from './interpolateStyles';
import getPercentage from './getPercentage';
import applyStyles from './applyStyles';

const scrollEventFunction = (opts) => {
  const {
    target,
    waypoints,
    margin,
    targetY,
    viewportHeight,
  } = opts;

  const percentage = getPercentage({ margin, viewportHeight, targetY });
  const style = interpolateStyles({ waypoints, percentage, target });
  applyStyles({ target, style });
};

export default scrollEventFunction;
