import addScrollListener from './addScrollListener';
import addResizeListener from './addResizeListener';
import normalizeWaypoints from './common/normalizeWaypoints';
import removeListener from './removeListener';
import events from './data/events';
import paint from './paint';

const create = (opts = {}) => {
  const {
    target,
    waypoints = [],
    margin = {},
  } = opts;

  const normalizedWaypoints = normalizeWaypoints(waypoints);

  events.scrollFunction = addScrollListener({
    target,
    waypoints: normalizedWaypoints,
    margin,
  });

  events.resizeFunction = addResizeListener({
    target,
    waypoints: normalizedWaypoints,
    margin,
    events,
  });

  const firstPaint = () => {
    paint({
      target,
      waypoints: normalizedWaypoints,
      margin,
    });
  };

  firstPaint();

  return {
    destroy: () => {
      removeListener('scroll', events.scrollFunction);
      removeListener('scroll', events.resizeFunction);
    },
    paint: firstPaint,
  };
};

export default create;
