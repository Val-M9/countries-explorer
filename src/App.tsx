import { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { themeSchemas } from './theme/theme';
import { Header } from './components/components';
import './App.scss';

const themeColors = {
  dark: themeSchemas.dark,
  light: themeSchemas.light,
};

function App() {
  const [theme, setTheme] = useState(themeColors.light);

  const handleToggleTheme = () => {
    theme.dark ? setTheme(themeColors.light) : setTheme(themeColors.dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header onToggleTheme={handleToggleTheme} />
    </ThemeProvider>
  );
}

export default App;
