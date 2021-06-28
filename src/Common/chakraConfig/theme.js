import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      100: "#9CA7F74D",
      200: "#9CA7F799",
      300: "#9CA7F7E6",
      400: "#9CA7F7",
    },
    secondary: {
      100: "#9F7B1934D",
      200: "#F7B19399",
      300: "#F7B193E6",
      400: "#F7B193",
    },
    background: {
      100: "#22272E4D",
      200: "#22272E99",
      300: "#22272EE6",
      400: "#22272E",
    },
    text: {
      onPrimary: "#343434",
      onSecondary: "#343434",
      onBackground: "#FFFFFF",
      onSurface: "#FFFFFFE6",
    },
  },
});
