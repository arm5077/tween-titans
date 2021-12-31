import addResizeListener from 'Common/addListener/resize';
import removeListener from 'Common/removeListener';
import refresh from 'Common/refresh';

const create = (opts = {}) => {
  const {
    target,
    waypoints = [],
    margin = {},
    stepFunction,
  } = opts;

  if (!target) {
    return {
      destroy: () => {},
    };
  }

  const store = {
    update(key, value) {
      this[key] = value;
    },
  };

  const refreshTween = () => refresh({
    mode: 'TweenWaypoints',
    store,
    target,
    waypoints,
    margin,
    stepFunction,
  });
  refreshTween();

  store.resizeFunction = addResizeListener({
    mode: 'TweenWaypoints',
    target,
    waypoints,
    margin,
    stepFunction,
    store,
  });

  return {
    target,
    destroy: () => {
      removeListener('scroll', store.scrollFunction);
      removeListener('resize', store.resizeFunction);
    },
    store,
    refresh: refreshTween,
    style: {},
  };
};

export default create;
