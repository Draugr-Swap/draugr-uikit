import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#8a6a10",
  primaryBright: "#67500c",
  primaryDark: "#8f6e10",
  secondary: "#a56227",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#4D4F96",
  backgroundDisabled: "#4D4F96",
  contrast: "#191326",
  invertedContrast: "#4D4F96",
  input: "#4D4F96",
  tertiary: "#4D4F96",
  text: '#F25A29',
  textDisabled: '#998c83',
  textSubtle: '#F25A29',
  borderColor: "#E9EAEB",
  card: "#4D4F96",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#be7434",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  // primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
