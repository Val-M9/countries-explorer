import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const cardWrapper = (theme: Theme) => css`
  width: 250px;
  height: 400px;
  margin: 40px;
  background-color: ${theme.backgroundSecondaryColor};
  border-radius: ${theme.rm}px;
  box-shadow: ${theme.dark ? theme.primaryDarkShadow : theme.primaryLightShadow};
`;

export const flag = css`
  width: 100%;
  height: 190px;
`;

export const cardInfo = css`
  padding: 15px;
`;

export const title = (theme: Theme) => css`
  padding-bottom: 15px;
  font-size: ${theme.title}px;
  font-weight: ${theme.normal};
`;

export const info = (theme: Theme) => css`
  padding-top: 5px;
  font-size: ${theme.text}
  font-weight: ${theme.normal};
`;

export const definition = (theme: Theme) => css`
  color: ${theme.secondaryTextColor};
  font-weight: ${theme.light};
`;
