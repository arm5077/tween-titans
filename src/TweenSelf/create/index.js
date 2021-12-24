import normalizeWaypoints from 'Common/normalizeWaypoints';
import events from 'Common/events';
import removeListener from 'Common/removeListener';
import addScrollListener from './addScrollListener';
import addResizeListener from './addResizeListener';
import paint from './paint';

const create = (opts = {}) => {
  const {
    target,
    waypoints = [],
    margin = {},
  } = opts;

  const normalizedWaypoints = normalizeWaypoints(waypoints);

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
      removeListener('scroll', events.resizeFunction);
    },
    paint: firstPaint,
  };
};

export default create;
