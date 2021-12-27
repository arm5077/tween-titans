import getPositions from 'Common/getPositions';
import paintTween from 'Common/paintTween';

const paint = ({
  target, waypoints, margin, stepFunction,
}) => {
  const { targetY, viewportHeight } = getPositions(target);
  paintTween({
    target,
    waypoints,
    margin,
    targetY,
    viewportHeight,
    stepFunction,
    mode: 'TweenSelf',
  });
};

export default paint;
