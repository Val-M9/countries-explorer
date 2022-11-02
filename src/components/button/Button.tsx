/** @jsxImportSource @emotion/react */
import { ReactElement } from 'react';
import { btnWrapper } from './styles';

type ButtonProps = {
  icon?: ReactElement<any, any>;
  title: string;
  onClick: () => void;
};

const Button = ({ icon, title, onClick }: ButtonProps) => {
  return (
    <div css={btnWrapper} onClick={onClick}>
      {icon && icon}
      <p>{title}</p>
    </div>
  );
};

export { Button };
