import { extendTheme } from "native-base";

export const theme = extendTheme({
  fontConfig: {
    Outfit: {
      400: {
        normal: "Outfit_400Regular",
      },
      500: {
        normal: "Outfit_500Medium",
      },
      600: {
        normal: "Outfit_600SemiBold",
      },
    },
  },

  fonts: {
    heading: "Outfit",
    body: "Outfit",
    mono: "Outfit",
  },
  colors: {
    primary: {
      600: "#2c2c2c",
    },
    singletons: {
      darkText: "#212121",
    },
  },
});
