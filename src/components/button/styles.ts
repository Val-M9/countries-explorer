import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const btnWrapper = (theme: Theme) => css`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
  width: 100px;
  height: 40px;
  background-color: ${theme.backgroundSecondaryColor};
  box-shadow: ${theme.dark ? theme.primaryDarkShadow : theme.primaryLightShadow};
  border-radius: ${theme.rs}px;
  border: none;
  cursor: pointer;
  fill: ${theme.primaryTextColor};
`;

export const iconStyle = (theme: Theme) => css`
  width: 35px;
  height: 22px;
  padding-right: 5px;
  align-self: center;
`;

export const text = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
