const palette = {
  dark: '#191A20',
  primary: '#3F4150',
  secondary: '#8C8D96',
  tertiary: '#B2B3B9',
  border: '#E0E2E7',
  background: '#F7F8FA',
  white: '#FFFFFF',
  blue: '#3DA5F5',
  blueLight: '#ECF6FE',
  blueDark: '#3186C4',
  red: '#F86D7D',
  green: '#22C58B'
};

const fontSize = {
  micro: '12px',
  tiny: '12px',
  small: '14px',
  base: '16px',
  medium: '18px',
  large: '24px',
  xLarge: '32px'
};

const fontWeight = {
  light: '400',
  regular: '500',
  bold: '700'
};

const theme = {
  color: {
    colorDark: palette.dark,
    colorPrimary: palette.primary,
    colorSecondary: palette.secondary,
    colorTertiary: palette.tertiary,
    colorBorder: palette.border,
    colorBackground: palette.background,
    colorBlue: palette.blue,
    colorBlueLight: palette.blueLight,
    colorBlueDark: palette.blueDark,
    colorWhite: palette.white,
    colorRed: palette.red,
    colorGreen: palette.green
  },

  fontSize: {
    fontSize_micro: fontSize.micro,
    fontSize_tiny: fontSize.tiny,
    fontSize_small: fontSize.small,
    fontSize_base: fontSize.base,
    fontSize_medium: fontSize.medium,
    fontSize_large: fontSize.large,
    fontSize_xLarge: fontSize.xLarge
  },

  fontWeight: {
    fontWeight_light: fontWeight.light,
    fontWeight_regular: fontWeight.regular,
    fontWeight_bold: fontWeight.bold
  },

  spacing: {
    spacing_xSamll: '8px',
    spacing_small: '16px',
    spacing_medium: '24px',
    spacing_large: '32px',
    spacing_xLarge: '40px',
    spacing_xxLarge: '48px',
    spacing_xxxLarge: '56px',
    spacing_extraLarge: '120px'
  },

  radius: {
    borderRadius_small: '4px',
    borderRadius_medium: '8px',
    borderRadius_large: '100px'
  }
};

export default theme;
