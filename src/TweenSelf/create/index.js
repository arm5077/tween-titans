import addEventListener from './addEventListener';
import normalizeWaypoints from './common/normalizeWaypoints';
import destroy from './destroy';
import paint from './paint';

const create = (opts = {}) => {
  const {
    target,
    waypoints = [],
    margin = {},
  } = opts;

  const normalizedWaypoints = normalizeWaypoints(waypoints);

  const event = addEventListener({
    target,
    waypoints: normalizedWaypoints,
    margin,
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
    event,
    destroy: () => {
      destroy(event.function);
    },
    paint: firstPaint,
  };
};

export default create;
