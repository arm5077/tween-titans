import { throttle } from 'lodash';
import RESIZE_THROTTLE_THRESHOLD from 'Constants/main';
import refresh from 'Common/refresh';
import calculateWaypoints from '../calculateWaypoints';
import addScrollListener from '../addScrollListener';
import paint from '../paint';

const addResizeListener = (opts) => {
  const { waypoints } = opts;
  const throttledFunction = throttle(() => {
    const normalizedWaypoints = calculateWaypoints(waypoints);
    refresh({
      ...opts,
      paint,
      addScrollListener,
      waypoints: normalizedWaypoints,
    });
  },
  RESIZE_THROTTLE_THRESHOLD);

  window.addEventListener('resize', throttledFunction);

  return throttledFunction;
};

export default addResizeListener;
