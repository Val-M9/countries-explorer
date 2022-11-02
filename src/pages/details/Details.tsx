import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { callApi } from '../../api/call-api';
import { showCurrencies, showDomains, showLanguages } from '../../helpers';
import { BackBtn, Loader } from '../../components';

const Details = () => {
  const { name } = useParams();
  const [info, setInfo] = useState<Record<string, any>>();

  useEffect(() => {
    (async () => {
      if (name) {
        const result = await callApi.searchByName(name);
        setInfo(result);
      }
    })();
  }, [name]);

  if (!info) {
    return <Loader />;
  }
  return (
    <div>
      <BackBtn />
      <img alt="flag" />
      <div>
        <div>
          <h2>{info[0].name.common}</h2>
          <p>
            Native Name: <span>{info[0].name.common}</span>
          </p>
          <p>
            Population: <span>{info[0].population}</span>
          </p>
          <p>
            Region: <span>{info[0].region}</span>
          </p>
          <p>
            Sub region: <span>{info[0].subregion}</span>
          </p>
          <p>
            Capital: <span>{info[0].capital}</span>
          </p>
        </div>
        <div>
          <p>
            Top Level Domain: <span>{showDomains(info)}</span>
          </p>
          <p>
            Currencies: <span>{showCurrencies(info)}</span>
          </p>
          <p>
            Languages: <span>{showLanguages(info)}</span>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export { Details };
