/** @jsxImportSource @emotion/react */
import { ButtonProps } from '../../common/types';
import { btnWrapper, iconStyle, text } from './styles';

const Button = ({ icon, title, onClick, style }: ButtonProps) => {
  return (
    <button css={[btnWrapper, style]} onClick={onClick}>
      {icon && <div css={iconStyle}>{icon}</div>}
      <p css={text}>{title}</p>
    </button>
  );
};

export { Button };
