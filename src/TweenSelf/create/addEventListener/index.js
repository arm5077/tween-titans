import { throttle } from 'lodash';
import THROTTLE_THRESHOLD from 'Constants/main';
import getPositions from 'Common/getPositions';
import paintTween from 'Src/TweenSelf/create/common/paintTween';

const addEventListener = (opts) => {
  const { target } = opts;
  const { targetY, viewportHeight } = getPositions(target);

  const throttledFunction = throttle(
    () => paintTween({
      ...opts,
      targetY,
      viewportHeight,
    }),
    THROTTLE_THRESHOLD,
  );

  window.addEventListener('scroll', throttledFunction);

  return {
    function: throttledFunction,
  };
};

export default addEventListener;
