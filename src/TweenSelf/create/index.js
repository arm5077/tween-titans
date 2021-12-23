import addEventListener from './addEventListener';
import destroy from './destroy';

const create = (opts = {}) => {
  const {
    target,
    waypoints = [],
    margin = {},
  } = opts;

  const event = addEventListener({
    target, waypoints, margin,
  });

  return {
    event,
    destroy: () => {
      destroy(event.function);
    },
  };
};

export default create;
