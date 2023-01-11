import '@emotion/react';

type themeId = 'teal';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      colorDark: string;
      colorPrimary: string;
      colorSecondary: string;
      colorTertiary: string;
      colorBorder: string;
      colorBackground: string;
      colorBlue: string;
      colorBlueLight: string;
      colorBlueDark: string;
      colorWhite: string;
      colorRed: string;
      colorGreen: string;
    };

    fontSize: {
      fontSize_micro: string;
      fontSize_tiny: string;
      fontSize_small: string;
      fontSize_base: string;
      fontSize_medium: string;
      fontSize_large: string;
      fontSize_xLarge: string;
    };

    fontWeight: {
      fontWeight_light: string;
      fontWeight_regular: string;
      fontWeight_bold: string;
    };

    spacing: {
      spacing_xSamll: string;
      spacing_small: string;
      spacing_medium: string;
      spacing_large: string;
      spacing_xLarge: string;
      spacing_xxLarge: string;
      spacing_xxxLarge: string;
      spacing_extraLarge: string;
    };

    radius: {
      borderRadius_small: string;
      borderRadius_medium: string;
      borderRadius_large: string;
    };
  }
}
