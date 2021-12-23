import getPositions from 'Common/getPositions';
import paintTween from 'Src/TweenSelf/create/common/paintTween';

const paint = ({ target, waypoints, margin }) => {
  const { targetY, viewportHeight } = getPositions(target);
  paintTween({
    target,
    waypoints,
    margin,
    targetY,
    viewportHeight,
  });
};

export default paint;
