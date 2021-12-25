import refresh from 'Common/refresh';
import addScrollListener from '../addScrollListener';
import paint from '../paint';

const reset = (opts) => {
  refresh({
    ...opts,
    addScrollListener,
    paint,
  });
};

export default reset;
