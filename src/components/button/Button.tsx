/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { ButtonProps } from '../../common/types';
import { btnWrapper, iconStyle, text } from './styles';

const Button: FC<ButtonProps> = ({ icon, title, onClick, style }) => {
  return (
    <button css={[btnWrapper, style]} onClick={onClick}>
      {icon && <div css={iconStyle}>{icon}</div>}
      <p css={text}>{title}</p>
    </button>
  );
};

export { Button };
