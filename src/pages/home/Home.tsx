/** @jsxImportSource @emotion/react */
import { useEffect, useState, FC } from 'react';
import { NavLink } from 'react-router-dom';
import { callApi } from '../../api/call-api';
import { Card, Loader, Search } from '../../components';
import { home, homeWrapper, filterPlacement, link } from './styles';

const Home: FC = () => {
  const [countries, setCountries] = useState<Record<string, any>[] | undefined>([]);

  useEffect(() => {
    (async () => {
      const allCountries = await callApi.getAll();
      setCountries(allCountries);
    })();
  }, []);

  if (!countries) {
    return <Loader />;
  }

  return (
    <div css={homeWrapper}>
      <div css={filterPlacement}>
        <Search />
      </div>
      <div css={home}>
        {countries?.map((country) => (
          <NavLink to={`/${country.name.common}`} key={country.name.common} css={link}>
            <Card
              flag={country.flags.png}
              name={country.name.common}
              region={country.region}
              population={country.population}
              capital={country.capital}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export { Home };
