import { Colors, DarkThemeShadows, FontSize, FontWeight, LightThemeShadows } from '../common/enums';

export const shadows = {
  headerDarkShadow: DarkThemeShadows.HEADER,
  primaryDarkShadow: DarkThemeShadows.PRIMARY,
  headerLightShadow: LightThemeShadows.HEADER,
  primaryLightShadow: LightThemeShadows.PRIMARY,
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

export const radiuses = {
  rs: 6,
  rm: 8,
};

export const themeSchemas = {
  light: {
    dark: false,
    backgroundColor: Colors.GRAY,
    backgroundSecondaryColor: Colors.WHITE,
    primaryTextColor: Colors.DARK_BLUE,
    secondaryTextColor: Colors.DARKEN_GRAY,
    iconColor: Colors.LIGHT_GRAY,
    ...shadows,
    ...fontWeight,
    ...fontSize,
    ...radiuses,
  },
  dark: {
    dark: true,
    backgroundColor: Colors.PRIMARY_BLUE,
    backgroundSecondaryColor: Colors.BLUE,
    primaryTextColor: Colors.WHITE,
    secondaryTextColor: Colors.DARK_GRAY,
    iconColor: Colors.LIGHT_GRAY,
    ...shadows,
    ...fontWeight,
    ...fontSize,
    ...radiuses,
  },
};
