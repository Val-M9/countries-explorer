/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { callApi } from '../../api/call-api';
import { getCurrencies, getDomains, getLanguages, getNativeName } from '../../helpers';
import { ArrowBack } from '../../common/svg';
import { Button, Loader } from '../../components';
import {
  detailsWrapper,
  content,
  btn,
  image,
  infoBlock,
  imageBlock,
  countryName,
  overallInfo,
  title,
  description,
} from './styles';

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const [info, setInfo] = useState<Record<string, any>>();

  useEffect(() => {
    (async () => {
      if (name) {
        const result = await callApi.searchByName(name);
        setInfo(result);
      }
    })();
  }, [name]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!info) {
    return <Loader />;
  }
  return (
    <div css={detailsWrapper}>
      <div css={content}>
        <div css={btn}>
          <Button icon={<ArrowBack />} title="Back" onClick={handleGoBack} />
        </div>
        <div css={imageBlock}>
          <img src={info[0].flags.png} alt="flag" css={image} />
        </div>
        <div css={infoBlock}>
          <h2 css={countryName}>{info[0].name.common}</h2>
          <div css={overallInfo}>
            <div>
              <p css={title}>
                Native Name: <span css={description}>{getNativeName(info)}</span>
              </p>
              <p css={title}>
                Population: <span css={description}>{info[0].population}</span>
              </p>
              <p css={title}>
                Region: <span css={description}>{info[0].region}</span>
              </p>
              <p css={title}>
                Sub region: <span css={description}>{info[0].subregion}</span>
              </p>
              <p css={title}>
                Capital: <span css={description}>{info[0].capital}</span>
              </p>
            </div>
            <div>
              <p css={title}>
                Top Level Domain: <span css={description}>{getDomains(info)}</span>
              </p>
              <p css={title}>
                Currencies: <span css={description}>{getCurrencies(info)}</span>
              </p>
              <p css={title}>
                Languages: <span css={description}>{getLanguages(info)}</span>
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export { Details };
