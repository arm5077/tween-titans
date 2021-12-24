import { throttle } from 'lodash';
import SCROLL_THROTTLE_THRESHOLD from 'Constants/main';
import getPositions from 'Common/getPositions';
import paintTween from 'Src/TweenSelf/create/common/paintTween';

const addScrollListener = (opts) => {
  const { target } = opts;
  const { targetY, viewportHeight } = getPositions(target);

  const throttledFunction = throttle(
    () => paintTween({
      ...opts,
      targetY,
      viewportHeight,
    }),
    SCROLL_THROTTLE_THRESHOLD,
  );

  window.addEventListener('scroll', throttledFunction);

  return throttledFunction;
};

export default addScrollListener;
