import type { ReactNode } from 'react';
import { useState } from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import { themeSchemas } from '../styles/theme';

type ThemeProviderProps = {
  children: ReactNode;
};

const themeColors = {
  dark: themeSchemas.dark,
  light: themeSchemas.light,
};

const CustomThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(themeColors.light);

  return (
    <ThemeProvider theme={theme}>
      <Global styles />
      {children}
    </ThemeProvider>
  );
};

export { CustomThemeProvider };
