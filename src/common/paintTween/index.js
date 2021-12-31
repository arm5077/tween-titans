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
    stepFunction,
    store,
  } = opts;

  const percentage = getPercentage({
    mode, margin, viewportHeight, targetY, waypoints,
  });

  if (percentage >= 0 && percentage <= 1) {
    const style = interpolateStyles({ waypoints, percentage, target });
    store.update('style', style);
    applyStyles({ target, style });
    if (stepFunction) {
      stepFunction(percentage);
    }
  }
};

export default paintTween;
