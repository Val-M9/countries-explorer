/** @jsxImportSource @emotion/react */
import { cardWrapper, image, cardInfo, title, info, definition } from './styles';

type CardProps = {
  flag: string;
  name: string;
  population: string;
  region: string;
  capital: string;
};

const Card = ({ flag, name, population, region, capital }: CardProps) => {
  return (
    <div css={cardWrapper}>
      <img css={image} alt="flag" src={flag} />
      <div css={cardInfo}>
        <h2 css={title}>{name}</h2>
        <p css={info}>
          Population: <span css={definition}>{population}</span>
        </p>
        <p css={info}>
          Region: <span css={definition}>{region}</span>
        </p>
        <p css={info}>
          Capital: <span css={definition}>{capital}</span>
        </p>
      </div>
    </div>
  );
};

export { Card };
