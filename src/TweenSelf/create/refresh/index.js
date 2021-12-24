import removeListener from '../removeListener';
import addScrollListener from '../addScrollListener';
import paint from '../paint';

const refresh = ({
  events,
  target,
  waypoints,
  margin,
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
