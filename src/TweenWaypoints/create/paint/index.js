import getPositions from 'Common/getPositions';
import paintTween from 'Common/paintTween';

const paint = ({
  target, waypoints, margin, stepFunction,
}) => {
  const { viewportHeight } = getPositions(target);
  paintTween({
    target,
    waypoints,
    margin,
    viewportHeight,
    stepFunction,
    mode: 'TweenWaypoints',
  });
};

export default paint;
