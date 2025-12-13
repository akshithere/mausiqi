export interface ColorScheme {
  light: {
    10: string;
    20: string;
    30: string;
    40: string;
    50: string;
    60: string;
    70: string;
    80: string;
    90: string;
    100: string;
  };
  dark: {
    10: string;
    20: string;
    30: string;
    40: string;
    50: string;
    60: string;
    70: string;
    80: string;
    90: string;
    100: string;
  };
}
const white: ColorScheme = {
  light: {
    10: "#FFFFFF",
    20: "#FFFFFF",
    30: "#FFFFFF",
    40: "#FFFFFF",
    50: "#FFFFFF",
    60: "#f7f7f7",
    70: "#e6e6e6",
    80: "#fbfbfb",
    90: "#EEEEEE",
    100: "#FFFFFF",
  },
  dark: {
    10: "#100F0A",
    20: "#100F0A",
    30: "#100F0A",
    40: "#100F0A",
    50: "#100F0A",
    60: "#2c2c2c",
    70: "#414143",
    80: "#282828",
    90: "#100F0A",
    100: "#212121",
  },
};

const black: ColorScheme = {
  light: {
    10: "#100F0A",
    20: "#100F0A",
    30: "#100F0A",
    40: "#100F0A",
    50: "#100F0A",
    60: "#100F0A",
    70: "#100F0A",
    80: "#100F0A",
    90: "#100F0A",
    100: "#100F0A",
  },
  dark: {
    10: "#FFFFFF",
    20: "#FFFFFF",
    30: "#FFFFFF",
    40: "#FFFFFF",
    50: "#FFFFFF",
    60: "#FFFFFF",
    70: "#FFFFFF",
    80: "#FFFFFF",
    90: "#FFFFFF",
    100: "#FFFFFF",
  },
};

const color = {
  light: {
    white: white.light,
    black: black.light,
  },
  dark: {
    white: white.dark,
    black: black.dark,
  },
} as const;

export type ColorsType = typeof color;

export default color;
