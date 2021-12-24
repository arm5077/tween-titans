import { throttle } from 'lodash';
import SCROLL_THROTTLE_THRESHOLD from 'Constants/main';
import getPositions from 'Common/getPositions';
import paintTween from 'Common/paintTween';

const addScrollListener = (opts) => {
  const { target } = opts;
  const { viewportHeight } = getPositions(target);

  const throttledFunction = throttle(
    () => paintTween({
      ...opts,
      viewportHeight,
      mode: 'TweenWaypoints',
    }),
    SCROLL_THROTTLE_THRESHOLD,
  );

  window.addEventListener('scroll', throttledFunction);

  return throttledFunction;
};

export default addScrollListener;
