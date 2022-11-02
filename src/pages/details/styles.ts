import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const detailsWrapper = css`
  display: flex;
  min-height: calc(100vh - 80px);
  height: 100%;
`;

export const content = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  margin: 0 70px;
`;

export const btn = css`
  position: absolute;
  top: 70px;
`;

export const imageBlock = css`
  align-self: center;
  margin-right: 30px;
`;

export const image = css`
  height: 350px;
  width: 550px;
`;

export const infoBlock = (theme: Theme) => css`
  display: grid;
  grid-template-rows: 70px 1fr 70px;
  align-self: center;
  margin-left: 15px;
  line-height: 1.9;
`;

export const countryName = (theme: Theme) => css`
  font-size: ${theme.title}px;
  font-weight: ${theme.normal};
  margin-left: 15px;
`;

export const overallInfo = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const title = (theme: Theme) => css`
  font-size: ${theme.text}px;
  font-weight: ${theme.light};
  text-indent: -5px;
  margin-left: 15px;
`;

export const description = (theme: Theme) => css`
  color: ${theme.secondaryTextColor};
  margin-left: 0;
`;