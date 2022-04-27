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
      700: "#FDB35D",
      800: "#3BCBB2",
      900: "#E3A6AE",
    },
    singletons: {
      darkText: "#212121",
    },
  },
});
