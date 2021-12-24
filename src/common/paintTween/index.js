import interpolateStyles from './interpolateStyles';
import getPercentage from './getPercentage';
import applyStyles from './applyStyles';

const paintTween = (opts) => {
  const {
    mode,
    target,
    waypoints,
    margin,
    targetY,
    viewportHeight,
  } = opts;

  const percentage = getPercentage({
    mode, margin, viewportHeight, targetY, waypoints,
  });

  const style = interpolateStyles({ waypoints, percentage, target });

  applyStyles({ target, style });
};

export default paintTween;
