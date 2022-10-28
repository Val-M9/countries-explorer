import { fontSize, fontWeight, shadows } from '../../styles/theme';

type ShadowType = typeof shadows;
interface Shadows extends ShadowType {}

type Fs = typeof fontSize;
interface FontSize extends Fs {}

type Fw = typeof fontWeight;
interface FontWeight extends Fw {}

export interface CustomTheme extends Shadows, FontSize, FontWeight {
  dark: boolean;
  background: string;
  backgroundSecondary: string;
  primaryText: string;
  secondaryText: string;
}
