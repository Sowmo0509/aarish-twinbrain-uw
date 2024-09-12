import { Container, createTheme, rem, TextInputProps } from "@mantine/core";
import CONSTANTS from "./data/const";

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(300),
  xs: rem(400),
  sm: rem(500),
  md: rem(600),
  lg: rem(700),
  xl: rem(800),
  xxl: rem(900),
  "3xl": rem(1400),
};

export const theme = createTheme({
  primaryColor: "darkest",
  colors: {
    darkest: ["#818181", "#777777", "#636363", "#4E4E4E", "#3A3A3A", "#252525", "#111111", "#000000", "#000000", "#000000"],
  },
  autoContrast: true,
  luminanceThreshold: 0.29,
  defaultRadius: "0.7rem",
  cursorType: "pointer",

  // Extended
  radius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.8rem",
    xl: "1.5rem",
  },
  fontSizes: {
    massive: rem(80),
  },

  // Extended Components
  components: {
    Button: {
      styles: () => ({
        root: {
          transition: "all 150ms ease-in-out",
        },
      }),
    },
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid ? "100%" : size !== undefined && size in CONTAINER_SIZES ? CONTAINER_SIZES[size] : rem(size),
        },
      }),
    }),

    TextInput: {
      styles: (theme: TextInputProps, params: TextInputProps) => ({
        label: {
          color: CONSTANTS.COLOR.LIGHT_GREY,
          fontWeight: 400,
          marginBottom: 8,
        },
        description: {
          marginTop: 12,
          marginLeft: 4,
        },
        input: {
          fontSize: params.size === "sm" ? "12px" : params.size === "lg" ? "18px" : params.size === "xl" ? "16px" : "16px",
          height: params.size === "sm" ? "35px" : params.size === "lg" ? "55px" : params.size === "xl" ? "320px" : "54px",
          paddingLeft: 18,
          paddingRight: 18,
        },
      }),
    },
  },
});
