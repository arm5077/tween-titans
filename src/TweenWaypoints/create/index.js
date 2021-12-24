import events from 'Common/events';
import addScrollListener from './addScrollListener';
import calculateWaypoints from './calculateWaypoints';
import paint from './paint';

const create = (opts = {}) => {
  const {
    target,
    waypoints,
    margin,
  } = opts;

  const normalizedWaypoints = calculateWaypoints(waypoints);

  events.scrollFunction = addScrollListener({
    ...opts,
    waypoints: normalizedWaypoints,
  });

  const firstPaint = () => {
    paint({
      ...opts,
      waypoints: normalizedWaypoints,
    });
  };
  firstPaint();
};

export default create;
