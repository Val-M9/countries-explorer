/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '../../common/svg';
import { btnWrapper, icon } from './styles';

const BackBtn = () => {
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <div css={btnWrapper} onClick={onGoBack}>
      <ArrowBack css={icon} />
      <p>Back</p>
    </div>
  );
};

export { BackBtn };
