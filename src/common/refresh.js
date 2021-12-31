import removeListener from 'Common/removeListener';
import paintTween from 'Common/paintTween';
import getPositions from 'Common/getPositions';
import normalize from 'Common/normalize';
import convertNodesToPercents from 'Common/normalize/convertNodesToPercents';
import addScrollListener from 'Common/addListener/scroll';

const refresh = (opts) => {
  const {
    mode,
    store,
    target,
    waypoints: rawWaypoints,
    margin,
    stepFunction,
  } = opts;

  const { scrollFunction } = store;
  if (scrollFunction) {
    removeListener('scroll', scrollFunction);
  }

  const { targetY, viewportHeight } = getPositions(target);

  const waypoints = mode === 'TweenSelf'
    ? normalize(rawWaypoints)
    : convertNodesToPercents(rawWaypoints);

  const newEvent = addScrollListener({
    mode,
    target,
    waypoints,
    margin,
    stepFunction,
    store,
  });

  paintTween({
    mode,
    target,
    waypoints,
    margin,
    targetY,
    viewportHeight,
    stepFunction,
    store,
  });

  store.update('scrollFunction', newEvent);
};

export default refresh;
