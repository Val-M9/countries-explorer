const getCurrencies = (country: any) => {
  const keys = Object.keys(country[0].currencies);
  let values: string[] = [];
  keys.map((key: string) => values.push(country[0].currencies[key].name));

  return values.join(', ');
};

export { getCurrencies };
