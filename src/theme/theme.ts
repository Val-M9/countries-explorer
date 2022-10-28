import { Colors, DarkThemeShadows, LightThemeShadows } from '../common/enums/enums';

const shadows = {
  headerDarkShadow: DarkThemeShadows.HEADER,
  primaryDarkShadow: DarkThemeShadows.PRIMARY,
  headerLightShadow: LightThemeShadows.HEADER,
  PrimaryLightShadow: LightThemeShadows.PRIMARY,
};

const themeSchemas = {
  light: {
    dark: false,
    background: Colors.GRAY,
    backgroundSecondary: Colors.WHITE,
    primaryText: Colors.DARK_BLUE,
    secondaryText: Colors.DARK_GRAY,
    ...shadows,
  },
  dark: {
    dark: true,
    background: Colors.PRIMARY_BLUE,
    backgroundSecondary: Colors.BLUE,
    primaryText: Colors.WHITE,
    secondaryText: Colors.DARK_GRAY,
    ...shadows,
  },
};

export { themeSchemas };
