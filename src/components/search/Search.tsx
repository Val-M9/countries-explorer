/** @jsxImportSource @emotion/react */
import { Magnifier } from '../../common/svg';
import { inputWrapper, input, icon } from './styles';

const Search = () => {
  return (
    <div css={inputWrapper}>
      <Magnifier css={icon} />
      <input css={input} placeholder="Search for country..." />
    </div>
  );
};

export { Search };
