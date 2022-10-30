import type { ReactNode } from 'react';
import type { Theme } from '@emotion/react';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles } from '../styles/global-styles';

type ThemeProviderProps = {
  children: ReactNode;
  theme: Theme;
};

const CustomThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};

export { CustomThemeProvider };
