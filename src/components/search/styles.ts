import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const inputWrapper = css`
  position: relative;
`;

export const input = (theme: Theme) => css`
  width: 500px;
  height: 50px;
  padding: 5px 10px 5px 65px;
  border-radius: ${theme.rm}px;
  border-style: hidden;
  outline: none;
  background-color: ${theme.backgroundSecondaryColor};
  box-shadow: ${theme.dark ? theme.primaryDarkShadow : theme.primaryLightShadow};

  ::placeholder {
    color: ${theme.secondaryTextColor};
  }
`;

export const icon = (theme: Theme) => css`
  position: absolute;
  top: 9px;
  left: 15px;
  width: 30px;
  height: 32px;
  fill: ${theme.iconColor};
`;
