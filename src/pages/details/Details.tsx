/** @jsxImportSource @emotion/react */
import { useEffect, useState, FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { callApi } from '../../api/call-api';
import { getBorders, getCurrencies, getDomains, getLanguages, getNativeName } from '../../helpers';
import { ArrowBack } from '../../common/svg';
import { Button, Loader } from '../../components';
import { themeSchemas } from '../../styles/theme';
import * as styles from './styles';

const Details: FC = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  console.log(themeSchemas);

  const [countryInfo, setCountryInfo] = useState<Record<string, any>>();
  const [borderCountries, setBorderCountries] = useState<Record<string, any>[]>();

  useEffect(() => {
    (async () => {
      if (name) {
        const info = await callApi.getByName(name);
        const borders = info && getBorders(info[0].borders);

        if (borders) {
          const getBorderCountries = await callApi.getByCode(borders);
          setBorderCountries(getBorderCountries);
        }
        setCountryInfo(info);
      }
    })();
  }, [name]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const openBorderCountry = (name: string) => {
    navigate(`/${name}`);
  };

  if (!countryInfo) {
    return <Loader />;
  }
  return (
    <div css={styles.detailsWrapper}>
      <div css={styles.content}>
        <div css={styles.btn}>
          <Button icon={<ArrowBack />} title="Back" onClick={handleGoBack} />
        </div>
        <div css={styles.imageBlock}>
          <img src={countryInfo[0].flags.png} alt="flag" css={styles.image} />
        </div>
        <div css={styles.infoBlock}>
          <h2 css={styles.countryName}>{countryInfo[0].name.common}</h2>
          <div css={styles.overallInfo}>
            <div>
              <p css={styles.title}>
                Native Name: <span>{getNativeName(countryInfo)}</span>
              </p>
              <p css={styles.title}>
                Population: <span>{countryInfo[0].population}</span>
              </p>
              <p css={styles.title}>
                Region: <span>{countryInfo[0].region}</span>
              </p>
              <p css={styles.title}>
                Sub region: <span>{countryInfo[0].subregion}</span>
              </p>
              <p css={styles.title}>
                Capital: <span>{countryInfo[0].capital}</span>
              </p>
            </div>
            <div>
              <p css={styles.title}>
                Top Level Domain: <span>{getDomains(countryInfo)}</span>
              </p>
              <p css={styles.title}>
                Currencies: <span>{getCurrencies(countryInfo)}</span>
              </p>
              <p css={styles.title}>
                Languages: <span>{getLanguages(countryInfo)}</span>
              </p>
            </div>
          </div>
          <div css={styles.borderBlock}>
            <h3 css={styles.borderTitle}>Border countries:</h3>
            {borderCountries ? (
              borderCountries?.map((country) => (
                <div css={styles.btnStyle} datatype={`${country.name.common}`}>
                  <Button
                    title={country.name.common}
                    onClick={() => openBorderCountry(country.name.common)}
                  />
                </div>
              ))
            ) : (
              <p>No border countries</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Details };
