import { useState } from 'react';
import { ThemeType } from '../common/enums/enums';

const useTheme = (value: ThemeType) => {
  const [theme, setTheme] = useState('light');
  setTheme(value);

  return theme;
};

export { useTheme };
