/** @jsxImportSource @emotion/react */
import { cardWrapper, flag, cardInfo, title, info, definition } from './styles';

type CardProps = {
  flag: string;
  name: string;
  population: string;
  region: string;
  capitol: string;
};

const Card = () => {
  return (
    <div css={cardWrapper}>
      <img css={flag} alt="flag" />
      <div css={cardInfo}>
        <h2 css={title}>Germany</h2>
        <p css={info}>
          Population: <span css={definition}>18888</span>
        </p>
        <p css={info}>
          Region: <span css={definition}>Asia</span>
        </p>
        <p css={info}>
          Capitol: <span css={definition}>Berlinnn</span>
        </p>
      </div>
    </div>
  );
};

export { Card };
