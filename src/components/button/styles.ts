import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const btnWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  width: 100px;
  background-color: ${theme.backgroundSecondaryColor};
  box-shadow: ${theme.dark ? theme.primaryDarkShadow : theme.primaryLightShadow};
  border-radius: ${theme.rs}px;
  cursor: pointer;
  fill: ${theme.primaryTextColor};
`;

export const iconStyle = (theme: Theme) => css`
  width: 25px;
  height: 15px;
  padding-right: 5px;
  align-self: center;
`;
