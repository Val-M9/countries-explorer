import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CustomThemeProvider } from './custom-provider/custom-theme-provider';
import { RoutesPath } from './common/constants';
import { Details, Home } from './pages';
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
      <Routes>
        <Route path={RoutesPath.MAIN} element={<Home />} />
        <Route path={RoutesPath.DETAILS_NAME} element={<Details />} />
      </Routes>
    </CustomThemeProvider>
  );
};

export default App;
