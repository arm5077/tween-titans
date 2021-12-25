import removeListener from 'Common/removeListener';

const refresh = ({
  events,
  target,
  waypoints,
  margin,
  addScrollListener,
  paint,
}) => {
  const { scrollFunction } = events;
  removeListener('scroll', scrollFunction);

  const newEvent = addScrollListener({
    target,
    waypoints,
    margin,
  });

  paint({
    target,
    waypoints,
    margin,
  });

  events.update('scrollFunction', newEvent);
};

export default refresh;
