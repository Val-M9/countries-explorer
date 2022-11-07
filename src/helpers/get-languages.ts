const getLanguages = (country: any) => {
  const keys = Object.keys(country[0].languages);
  let values: string[] = [];
  keys.map((key: string) => values.push(country[0].languages[key]));

  return values.join(', ');
};

export { getLanguages };
