/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { callApi } from '../../api/call-api';
import { RoutesPath } from '../../common/constants';
import { Card, Loader, Search } from '../../components';
import { home, homeWrapper, filterPlacement, link } from './styles';

const Home = () => {
  const [countries, setCountries] = useState<Record<string, any>[]>([]);

  useEffect(() => {
    (async () => {
      const result = await callApi.getAll();
      console.log(result);
      setCountries(result);
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
          <NavLink
            to={`${RoutesPath.DETAILS}${country.name.common}`}
            key={country.name.common}
            css={link}
          >
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
