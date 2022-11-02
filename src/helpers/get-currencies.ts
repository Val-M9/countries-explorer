const getCurrencies = (country: any) => {
  const keys = Object.keys(country[0].currencies);
  let values: string[] = [];
  let string = '';

  keys.map((key: string) => values.push(country[0].currencies[key].name));

  values.map((value: string) => {
    string = `${string} ${value}, `;
    return string;
  });
  return string.substring(0, string.length - 2);
};

export { getCurrencies };