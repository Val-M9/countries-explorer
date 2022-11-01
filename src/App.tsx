import { useState } from 'react';
import { CustomThemeProvider } from './custom-provider/custom-theme-provider';
import { Home } from './pages';
import { Header } from './components';
import { themeSchemas } from './styles/theme';

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
      <Home />
    </CustomThemeProvider>
  );
};

export default App;
