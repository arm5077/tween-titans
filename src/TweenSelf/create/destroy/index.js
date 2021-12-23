const destroy = (eventFunction) => {
  window.removeEventListener('scroll', eventFunction);
};

export default destroy;
