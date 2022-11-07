import { Interpolation, Theme } from '@emotion/react';
import { ReactElement } from 'react';

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'size' | 'type' | 'style'> {
  icon?: ReactElement<any, any>;
  title: string;
  onClick: () => void;
  style?: Interpolation<Theme>;
}
