const getBorders = (countryBorders: string[] | undefined) => {
  return countryBorders && countryBorders.join(',');
};

export { getBorders };
