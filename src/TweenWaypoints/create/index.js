import removeListener from 'Common/removeListener';
import addScrollListener from './addScrollListener';
import addResizeListener from './addResizeListener';
import calculateWaypoints from './calculateWaypoints';
import paint from './paint';
import reset from './reset';

const create = (opts = {}) => {
  const {
    waypoints,
  } = opts;

  const events = {
    update(key, value) {
      this[key] = value;
    },
  };

  const normalizedWaypoints = calculateWaypoints(waypoints);

  events.scrollFunction = addScrollListener({
    ...opts,
    waypoints: normalizedWaypoints,
  });

  events.resizeFunction = addResizeListener({
    ...opts,
    waypoints: normalizedWaypoints,
    events,
  });

  const firstPaint = () => {
    paint({
      ...opts,
      waypoints: normalizedWaypoints,
    });
  };
  firstPaint();

  return {
    destroy: () => {
      removeListener('scroll', events.scrollFunction);
      removeListener('resize', events.resizeFunction);
    },
    paint: firstPaint,
    reset: () => {
      reset({
        ...opts,
        events,
      });
    },
  };
};

export default create;
