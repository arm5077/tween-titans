import getPositions from 'Common/getPositions';
import paintTween from 'Common/paintTween';

const paint = ({ target, waypoints, margin }) => {
  const { viewportHeight } = getPositions(target);
  paintTween({
    target,
    waypoints,
    margin,
    viewportHeight,
    mode: 'TweenWaypoints',
  });
};

export default paint;
