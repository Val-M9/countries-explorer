import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const cardWrapper = (theme: Theme) => css`
  width: 270px;
  height: 350px;
  margin: 25px 15px;
  background-color: ${theme.backgroundSecondaryColor};
  border-radius: ${theme.rm}px;
  box-shadow: ${theme.dark ? theme.primaryDarkShadow : theme.primaryLightShadow};
  cursor: pointer;
`;

export const image = (theme: Theme) => css`
  width: 100%;
  height: 170px;
  border-top-right-radius: ${theme.rm}px;
  border-top-left-radius: ${theme.rm}px;
  border-bottom: 1px solid ${theme.backgroundColor};
`;

export const cardInfo = css`
  padding: 20px;
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
