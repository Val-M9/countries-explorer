import { CustomTheme } from './custom-theme';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
