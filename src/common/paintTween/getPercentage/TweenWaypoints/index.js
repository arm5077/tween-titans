import bounds from '../utils/bounds';

const TweenWaypoints = (opts) => {
  const { viewportHeight, waypoints, margin = 0 } = opts;
  const { scrollY } = window;

  const firstYPos = waypoints[0].yPos;
  const lastYPos = waypoints[waypoints.length - 1].yPos;

  const rawPercentage = ((scrollY + viewportHeight - margin) - firstYPos)
    / (lastYPos - firstYPos);

  const percentage = bounds(rawPercentage);

  return percentage;
};

export default TweenWaypoints;
