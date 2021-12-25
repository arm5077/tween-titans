import { throttle } from 'lodash';
import RESIZE_THROTTLE_THRESHOLD from 'Constants/main';
import reset from '../reset';

const addResizeListener = (opts) => {
  const throttledFunction = throttle(() => reset(opts),
    RESIZE_THROTTLE_THRESHOLD);

  window.addEventListener('resize', throttledFunction);

  return throttledFunction;
};

export default addResizeListener;
