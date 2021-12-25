import refresh from 'Common/refresh';
import calculateWaypoints from '../calculateWaypoints';
import addScrollListener from '../addScrollListener';
import paint from '../paint';

const reset = (opts) => {
  const { waypoints } = opts;
  const normalizedWaypoints = calculateWaypoints(waypoints);
  refresh({
    ...opts,
    paint,
    addScrollListener,
    waypoints: normalizedWaypoints,
  });
};

export default reset;
