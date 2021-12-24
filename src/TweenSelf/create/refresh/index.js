import removeListener from 'Common/removeListener';
import addScrollListener from '../addScrollListener';
import paint from '../paint';

const refresh = ({
  events,
  target,
  waypoints,
  margin,
  mode,
}) => {
  const { scrollFunction } = events;
  removeListener('scroll', scrollFunction);

  const newEvent = addScrollListener({
    target,
    waypoints,
    margin,
    mode,
  });

  paint({
    target,
    waypoints,
    margin,
    mode,
  });

  events.update('scrollFunction', newEvent);
};

export default refresh;
