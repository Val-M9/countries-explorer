import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const homeWrapper = css`
  margin: 50px;
`;

export const filterPlacement = css`
  margin-left: 15px;
  margin-bottom: 25px;
`;

export const home = (theme: Theme) => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
