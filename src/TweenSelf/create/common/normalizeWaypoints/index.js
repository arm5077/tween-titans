const normalizeWaypoints = (waypoints) => {
  const properties = {};
  const normalizedWaypoints = [];

  waypoints.forEach((waypoint) => {
    const { style } = waypoint;
    Object.entries(style).forEach(([key, value]) => {
      properties[key] = value;
    });

    normalizedWaypoints.push({
      ...waypoint,
      style: {
        ...properties,
      },
    });
  });

  return normalizedWaypoints;
};

export default normalizeWaypoints;
