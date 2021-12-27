import removeListener from 'Common/removeListener';

const refresh = ({
  events,
  target,
  waypoints,
  margin,
  addScrollListener,
  paint,
  stepFunction,
}) => {
  const { scrollFunction } = events;
  removeListener('scroll', scrollFunction);

  const newEvent = addScrollListener({
    target,
    waypoints,
    margin,
    stepFunction,
  });

  paint({
    target,
    waypoints,
    margin,
    stepFunction,
  });

  events.update('scrollFunction', newEvent);
};

export default refresh;
