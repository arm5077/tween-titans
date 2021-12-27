import normalizeWaypoints from 'Common/normalizeWaypoints';
// import events from 'Common/events';
import removeListener from 'Common/removeListener';
import addScrollListener from './addScrollListener';
import addResizeListener from './addResizeListener';
import paint from './paint';
import reset from './reset';

const create = (opts = {}) => {
  const {
    waypoints = [],
  } = opts;

  const normalizedWaypoints = normalizeWaypoints(waypoints);

  const events = {
    update(key, value) {
      this[key] = value;
    },
  };

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
