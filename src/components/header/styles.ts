import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const header = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  height: 80px;
  background-color: ${theme.backgroundSecondary};
  box-shadow: ${theme.dark ? theme.headerDarkShadow : theme.headerLightShadow};
`;

export const heading = (theme: Theme) => css`
  font-weight: ${theme.bold};
  font-size: ${theme.heading}px;
`;

export const themeBtn = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${theme.text}px;
  font-weight: ${theme.normal};
  cursor: pointer;
`;

export const icon = css`
  height: 32px;
  width: 32px;
  padding-top: 5px;
  padding-right: 10px;
`;
