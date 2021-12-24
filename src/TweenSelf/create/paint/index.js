import getPositions from 'Common/getPositions';
import paintTween from 'Common/paintTween';

const paint = ({ target, waypoints, margin }) => {
  const { targetY, viewportHeight } = getPositions(target);
  paintTween({
    target,
    waypoints,
    margin,
    targetY,
    viewportHeight,
    mode: 'TweenSelf',
  });
};

export default paint;
