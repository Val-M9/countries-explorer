import { fontSize, fontWeight, shadows, radiuses } from '../../styles/theme';

type ShadowType = typeof shadows;
interface Shadows extends ShadowType {}

type FontSizeType = typeof fontSize;
interface FontSize extends FontSizeType {}

type FontWeightType = typeof fontWeight;
interface FontWeight extends FontWeightType {}

type RadiusType = typeof radiuses;
interface Radius extends RadiusType {}

export interface CustomTheme extends Shadows, FontSize, FontWeight, Radius {
  dark: boolean;
  backgroundColor: string;
  backgroundSecondaryColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  iconColor: string;
}
