import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const detailsWrapper = css`
  display: flex;
  min-height: calc(100vh - 80px);
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
  height: 100%;
  width: 100%;
`;

export const infoBlock = (theme: Theme) => css`
  display: grid;
  grid-template-rows: 70px 1fr 150px;
  align-self: center;
  margin-left: 15px;
  line-height: 1.7;
`;

export const countryName = (theme: Theme) => css`
  font-size: ${theme.title}px;
  font-weight: ${theme.normal};
  margin-left: 8px;
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

  & > span {
    color: ${theme.secondaryTextColor};
    margin-left: 0;
  }
`;

export const borderBlock = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-self: start;
  margin-left: 8px;
  margin-top: 15px;

  & > p {
    padding-top: 4px;
    text-align: center;
  }
`;

export const borderTitle = css`
  padding-right: 10px;
`;

export const btnStyle = (theme: Theme) => css`
  margin: 5px;
  height: 30px;
`;
