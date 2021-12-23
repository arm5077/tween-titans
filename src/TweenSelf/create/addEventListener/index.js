import { throttle } from 'lodash';
import THROTTLE_THRESHOLD from 'Constants/main';
import scrollEventFunction from './scrollEventFunction';

const addEventListener = (opts) => {
  const throttledFunction = throttle(
    () => scrollEventFunction(opts),
    THROTTLE_THRESHOLD,
  );

  window.addEventListener('scroll', throttledFunction);

  return {
    function: throttledFunction,
  };
};

export default addEventListener;
