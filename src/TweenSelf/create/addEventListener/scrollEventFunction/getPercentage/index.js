const getPercentage = ({
  margin,
  targetY,
  viewportHeight,
}) => {
  const userY = window.scrollY;
  const { top = 0, bottom = 0 } = margin;
  const baselineY = userY + viewportHeight - (targetY - top);
  const runway = viewportHeight + top + bottom;
  const rawPercentage = baselineY / runway;

  let percentage;
  if (rawPercentage < 0) {
    percentage = 0;
  } else if (rawPercentage > 1) {
    percentage = 1;
  } else {
    percentage = rawPercentage;
  }

  return percentage;
};

export default getPercentage;
