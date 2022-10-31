import { useState } from 'react';
import { themeSchemas } from './styles/theme';
import { Header } from './components/components';
import { CustomThemeProvider } from './custom-provider/custom-theme-provider';
import { Card } from './components/card/Card';

const themeColors = {
  dark: themeSchemas.dark,
  light: themeSchemas.light,
};

const App = () => {
  const [theme, setTheme] = useState(themeColors.light);

  const handleToggleTheme = () => {
    theme.dark ? setTheme(themeColors.light) : setTheme(themeColors.dark);
  };

  return (
    <CustomThemeProvider theme={theme}>
      <Header onToggleTheme={handleToggleTheme} />
      <Card />
    </CustomThemeProvider>
  );
};

export default App;
