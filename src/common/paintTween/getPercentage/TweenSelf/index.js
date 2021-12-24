import bounds from '../utils/bounds';

const TweenSelf = ({
  margin,
  targetY,
  viewportHeight,
}) => {
  const userY = window.scrollY;
  const { top = 0, bottom = 0 } = margin;
  const baselineY = userY + viewportHeight - (targetY - top);
  const runway = viewportHeight + top + bottom;
  const rawPercentage = baselineY / runway;

  const percentage = bounds(rawPercentage);

  return percentage;
};

export default TweenSelf;
