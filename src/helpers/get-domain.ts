const getDomains = (country: any) => {
  return country[0].tld.join(', ');
};

export { getDomains };
