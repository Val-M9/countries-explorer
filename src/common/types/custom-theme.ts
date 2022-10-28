interface Shadows {
  headerDarkShadow: string;
  primaryDarkShadow: string;
  headerLightShadow: string;
  PrimaryLightShadow: string;
}

export interface CustomTheme extends Shadows {
  dark: boolean;
  background: string;
  backgroundSecondary: string;
  primaryText: string;
  secondaryText: string;
}
