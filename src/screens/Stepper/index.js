import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Pressable,
  Text,
  useTheme,
  VStack,
} from "native-base";
import Onboarding from "react-native-onboarding-swiper";

const Dots = () => {
  return (
    <Box
      style={{
        display: "none",
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <Pressable {...props}>
    <Text>Omitir</Text>
  </Pressable>
);

const Next = ({ ...props }) => (
  <Button
    {...props}
    px={8}
    style={{
      position: "absolute",
    }}
    onPress={() => navigation.navigate("Stepper")}
  >
    Continuar
  </Button>
);

const Done = ({ ...props }) => (
  <Pressable {...props}>
    <Text>Hecho</Text>
  </Pressable>
);

export default Stepper = ({ navigation }) => {
  const theme = useTheme();
  return (
    <Onboarding
      bottomBarHighlight={false}
      containerStyles={{ backgroundColor: theme.colors.white }}
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      pages={[
        {
          backgroundColor: theme.colors.white,

          image: (
            <VStack space={4} alignItems="center">
              <Text fontSize="xs" letterSpacing={0.5}>
                PASO 1/5
              </Text>
              <Heading fontWeight="semibold" textAlign="center">
                Escoge un color
              </Heading>
            </VStack>
          ),

          title: (
            <Center>
              <Box flexDirection="row">
                <Pressable onPress={() => console.log("Soy el carbón")}>
                  <Box
                    maxW="9672"
                    shadow={4}
                    bg="primary.600"
                    p="6"
                    rounded="100"
                    m={2.5}
                  />
                </Pressable>
                <Pressable onPress={() => console.log("Soy el amarelo")}>
                  <Box
                    maxW="9672"
                    shadow={4}
                    bg="primary.700"
                    p="6"
                    rounded="100"
                    m={2.5}
                  />
                </Pressable>
              </Box>
              <Box flexDirection="row">
                <Pressable onPress={() => console.log("Soy el verde")}>
                  <Box
                    maxW="9672"
                    shadow={4}
                    bg="primary.800"
                    p="6"
                    rounded="100"
                    m={2.5}
                  />
                </Pressable>
                <Pressable onPress={() => console.log("Soy el rosita")}>
                  <Box
                    maxW="9672"
                    shadow={4}
                    bg="primary.900"
                    p="6"
                    rounded="100"
                    m={2.5}
                  />
                </Pressable>
              </Box>
            </Center>
          ),
          subtitle: (
            <Center>
              <Text px={16} my={12} textAlign="center" color="muted.500">
                Personaliza la app a tu gusto, selecciona uno de los colores
                para aplicarlo.
              </Text>
            </Center>
          ),
        },
        {
          backgroundColor: theme.colors.white,
          image: (
            <VStack space={4} alignItems="center">
              <Text fontSize="xs" letterSpacing={0.5}>
                PASO 1/5
              </Text>
              <Heading fontWeight="semibold" textAlign="center">
                Escoge un color
              </Heading>
            </VStack>
          ),
          title: "Share Your Favorites",
          subtitle: "Share Your Thoughts With Similar Kind of People",
        },
        {
          backgroundColor: theme.colors.white,
          image: (
            <VStack space={4} alignItems="center">
              <Text fontSize="xs" letterSpacing={0.5}>
                PASO 1/5
              </Text>
              <Heading fontWeight="semibold" textAlign="center">
                Escoge un color
              </Heading>
            </VStack>
          ),
          title: "Become The Star",
          subtitle: "Let The Spot Light Capture You",
        },
      ]}
    />
  );
};
