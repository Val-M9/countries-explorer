/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { callApi } from '../../api/call-api';
import { RoutesPath } from '../../common/constants';
import { Card, Loader, Search } from '../../components';
import { home, homeWrapper, filterPlacement } from './styles';

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
          <Link to={`${RoutesPath.DETAILS}${country.name.common}`} key={country.name.common}>
            <Card
              flag={country.flags.png}
              name={country.name.common}
              region={country.region}
              population={country.population}
              capital={country.capital}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export { Home };
