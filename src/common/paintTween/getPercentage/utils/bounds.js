export default (rawPercentage) => {
  let percentage;
  if (rawPercentage < 0) {
    percentage = -1;
  } else if (rawPercentage > 1) {
    percentage = 1.01;
  } else {
    percentage = rawPercentage;
  }
  return percentage;
};
