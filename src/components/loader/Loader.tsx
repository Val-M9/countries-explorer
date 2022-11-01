/** @jsxImportSource @emotion/react */
import { center, ldsRing } from './styles';

const Loader = () => {
  return (
    <div css={center}>
      <div css={ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export { Loader };
