const getNativeName = (country: any) => {
  const keys = Object.keys(country[0].name.nativeName);

  return country[0].name.nativeName[keys[0]].official;
};

export { getNativeName };
