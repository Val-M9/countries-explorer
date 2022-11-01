import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const globalStyles = (theme: Theme) => css`
  *,
  *::before,
  *::after {
    font-family: 'Nunito Sans', sans-serif;
    box-sizing: border-box;
    margin: 0;
  }

  body {
    display: flex;
    justify-content: center;
    background-color: ${theme.backgroundSecondaryColor}
  }

  #root {
    width: 100%;
    max-width: 1440px;
    height: 100%;
    background: ${theme.backgroundColor};
    color: ${theme.primaryTextColor};
    box-shadow: ${theme.dark ? theme.headerDarkShadow : theme.headerLightShadow}
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @font-face {
    font-family: 'Nunito Sans', sans-serif;
    url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap')
  }
`;
