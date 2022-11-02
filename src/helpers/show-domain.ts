const showDomains = (country: any) => {
  let string = '';
  country[0].tld.map((domain: string) => {
    string = `${string} ${domain}, `;
    return string;
  });
  return string.substring(0, string.length - 2);
};

export { showDomains };
