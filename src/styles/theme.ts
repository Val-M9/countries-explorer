import { Colors, DarkThemeShadows, FontSize, FontWeight, LightThemeShadows } from '../common/enums';

export const shadows = {
  headerDarkShadow: DarkThemeShadows.HEADER,
  primaryDarkShadow: DarkThemeShadows.PRIMARY,
  headerLightShadow: LightThemeShadows.HEADER,
  PrimaryLightShadow: LightThemeShadows.PRIMARY,
};

export const fontWeight = {
  light: FontWeight.LIGHT,
  normal: FontWeight.NORMAL,
  bold: FontWeight.BOLD,
};

export const fontSize = {
  heading: FontSize.HEADING,
  headingMobile: FontSize.HEADING_MOBILE,
  title: FontSize.TITLE,
  titleMobile: FontSize.TITLE_MOBILE,
  text: FontSize.TEXT,
  textMobile: FontSize.TEXT_MOBILE,
};

export const themeSchemas = {
  light: {
    dark: false,
    background: Colors.GRAY,
    backgroundSecondary: Colors.WHITE,
    primaryText: Colors.DARK_BLUE,
    secondaryText: Colors.DARK_GRAY,
    ...shadows,
    ...fontWeight,
    ...fontSize,
  },
  dark: {
    dark: true,
    background: Colors.PRIMARY_BLUE,
    backgroundSecondary: Colors.BLUE,
    primaryText: Colors.WHITE,
    secondaryText: Colors.DARK_GRAY,
    ...shadows,
    ...fontWeight,
    ...fontSize,
  },
};
