import { throttle } from 'lodash';
import RESIZE_THROTTLE_THRESHOLD from 'Constants/main';
import refresh from 'Common/refresh';
import addScrollListener from '../addScrollListener';
import paint from '../paint';

const addResizeListener = (opts) => {
  const throttledFunction = throttle(() => refresh({
    ...opts,
    addScrollListener,
    paint,
  }),
  RESIZE_THROTTLE_THRESHOLD);

  window.addEventListener('resize', throttledFunction);

  return throttledFunction;
};

export default addResizeListener;
