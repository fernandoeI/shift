import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Center,
  Checkbox,
  FlatList,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  Pressable,
  ScrollView,
  Stack,
  Text,
  useTheme,
  VStack,
} from "native-base";
import Onboarding from "react-native-onboarding-swiper";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Dots = () => {
  return (
    <Box
      style={{
        display: "none",
      }}
    />
  );
};

export default Stepper = () => {
  const onboardingRef = useRef(null);
  const theme = useTheme();
  const navigation = useNavigation();
  const [step, setStep] = useState(0);

  return (
    <Onboarding
      ref={onboardingRef}
      bottomBarHighlight={false}
      containerStyles={{ backgroundColor: theme.colors.white }}
      skipLabel="Volver"
      nextLabel="Siguiente"
      DotComponent={Dots}
      onSkip={() => {
        if (step === 0) return navigation.navigate("Welcome");
        onboardingRef.current.goToPage(step - 1, true);
      }}
      pageIndexCallback={(index) => setStep(index)}
      flatlistProps={{ scrollEnabled: false }}
      pages={[
        // PASO 1
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

        // PASO 2
        {
          backgroundColor: theme.colors.white,
          image: (
            <VStack space={4} alignItems="center">
              <Text fontSize="xs" letterSpacing={0.5}>
                PASO 2/5
              </Text>
              <Heading fontWeight="semibold" textAlign="center">
                Foto de perfil
              </Heading>
            </VStack>
          ),
          title: <ProfileImage />,
          subtitle: (
            <Center>
              <Text px={16} my={12} textAlign="center" color="primary.600">
                Puedes seleccionar alguna de estas opciones o añadir alguna foto
                para tu imagen de perfil.
              </Text>
              <Text mt={4} textAlign="center" color="primary.600">
                Seleccionar foto
              </Text>
            </Center>
          ),
        },

        // PASO 3
        {
          backgroundColor: theme.colors.white,
          image: (
            <VStack space={4} alignItems="center">
              <Text fontSize="xs" letterSpacing={0.5}>
                PASO 3/5
              </Text>
              <Heading fontWeight="semibold" textAlign="center">
                ¿Cuáles son tus intereses?
              </Heading>
            </VStack>
          ),
          title: <Hobbies />,
          subtitle: (
            <Center>
              <Text px={16} my={12} textAlign="center" color="primary.600">
                Siempre podrás modificar tus preferencias después
              </Text>
            </Center>
          ),
        },

        // PASO 4
        {
          backgroundColor: theme.colors.white,
          image: (
            <VStack space={4} alignItems="center">
              <Text fontSize="xs" letterSpacing={0.5}>
                PASO 4/5
              </Text>
              <Heading fontWeight="semibold" textAlign="center">
                ¿Qué hábitos deseas trabajar?
              </Heading>
            </VStack>
          ),
          title: <CheckHabits />,
          subtitle: (
            <Center>
              <Text px={16} my={12} textAlign="center" color="primary.600">
                Podrás configurar tus hábitos en cualquier momento.
              </Text>
            </Center>
          ),
        },

        // PASO 5
        {
          backgroundColor: theme.colors.white,
          image: (
            <VStack space={4} alignItems="center">
              <Text fontSize="xs" letterSpacing={0.5}>
                PASO 4/5
              </Text>
              <Heading fontWeight="semibold" textAlign="center">
                Ingresa tu correo
              </Heading>
            </VStack>
          ),
          title: <Register />,
          subtitle: <></>,
        },

        // PASO 6
        {
          backgroundColor: theme.colors.white,
          image: (
            <VStack space={4} alignItems="center">
              <Text fontSize="xs" letterSpacing={0.5}>
                PASO 4/5
              </Text>
              <Heading fontWeight="semibold" textAlign="center">
                Ingresa tu contraseña
              </Heading>
            </VStack>
          ),
          title: <Password />,
          subtitle: <></>,
        },
      ]}
    />
  );
};

const ProfileImage = () => {
  const [selectedItem, setSelectedItem] = useState([]);
  const onPressHandler = (id) => {
    setSelectedItem(id);
  };
  const data = [
    {
      id: 1,
      avatarName: require("../../assets/images/profile/Bear.png"),
    },
    {
      id: 2,
      avatarName: require("../../assets/images/profile/Cat.png"),
    },
    {
      id: 3,
      avatarName: require("../../assets/images/profile/Delicious.png"),
    },
    {
      id: 4,
      avatarName: require("../../assets/images/profile/FaceMask.png"),
    },
    {
      id: 5,
      avatarName: require("../../assets/images/profile/Pinata.png"),
    },
    {
      id: 6,
      avatarName: require("../../assets/images/profile/Pumpking.png"),
    },
    {
      id: 7,
      avatarName: require("../../assets/images/profile/Smile.png"),
    },
  ];
  return (
    <Center maxHeight={"32"}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignContent: "center" }}
      >
        <FlatList
          extraData={selectedItem}
          data={data}
          keyExtractor={(i, index) => {
            return i.id;
          }}
          horizontal={true}
          flexDirection="row"
          style={{ alignItems: "center" }}
          renderItem={({ item }) => (
            <Pressable onPress={() => onPressHandler(item.id)}>
              <Box
                shadow={1}
                style={{
                  shadowColor: "rgba(0,0,0, 0.4)",
                }}
                bg={selectedItem === item.id ? "primary.600" : "white"}
                p={selectedItem === item.id ? "4" : "2.5"}
                rounded="5"
                m="4"
              >
                <Image
                  source={item.avatarName}
                  alt="profile"
                  size="12"
                  resizeMode="contain"
                />
              </Box>
            </Pressable>
          )}
        />
      </ScrollView>
    </Center>
  );
};

const Hobbies = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const onPressHandler = (item) => {
    const newArray = [...selectedItems];
    const found = newArray.findIndex((i) => i.name === item.name);
    if (found !== -1) {
      newArray.splice(found, 1);
    } else {
      newArray.push(item);
    }
    setSelectedItems(newArray);
  };

  const data = [
    {
      name: "BODY",
      subtitle: "Workouts",
    },
    {
      name: "MIND",
      subtitle: "Meditación y mini retos",
    },
    {
      name: "NUTRICIÓN",
      subtitle: "Planes, recetas y amor propio",
    },
    {
      name: "TALLERES",
      subtitle: "Una nueva forma de crecer",
    },
  ];
  return (
    <Stack justifyContent="center" direction="row" flexWrap="wrap">
      {data.map((item, key) => (
        <Pressable onPress={() => onPressHandler(item)} key={key}>
          <Center
            m={3}
            shadow={2}
            size="2xl"
            bg={
              selectedItems.some((i) => i.name === item.name)
                ? "primary.600"
                : "gray.100"
            }
            borderRadius={8}
            p="2.5"
          >
            <Text
              color={
                selectedItems.some((i) => i.name === item.name)
                  ? "white"
                  : "primary.600"
              }
              fontSize={20}
              fontWeight="semibold"
            >
              {item.name}
            </Text>
            <Text
              color={
                selectedItems.some((i) => i.name === item.name)
                  ? "white"
                  : "primary.600"
              }
              textAlign="center"
            >
              {item.subtitle}
            </Text>
          </Center>
        </Pressable>
      ))}
    </Stack>
  );
};

const CheckHabits = () => {
  const habits = [
    "Comer mejor",
    "Estar en forma",
    "Tener mejor condición fisíca",
  ];
  const [groupValues, setGroupValues] = React.useState([]);
  return (
    <Checkbox.Group
      onChange={setGroupValues}
      value={groupValues}
      accessibilityLabel="choose numbers"
    >
      {habits.map((item) => {
        return (
          <Checkbox value={item} my={2} key={item}>
            {item}
          </Checkbox>
        );
      })}
    </Checkbox.Group>
  );
};

const Register = () => {
  return (
    <VStack space="10" alignItems="center" w="5/6">
      <Center>
        <Input
          variant="outline"
          placeholder="Email"
          height="12"
          borderColor="primary.600"
        />
      </Center>
      <Center>
        <Text color="gray.400">o ingresa con</Text>
      </Center>
      <Center flexDirection="row">
        <IconButton
          size="lg"
          variant="unstyled"
          _icon={{
            as: FontAwesome,
            name: "facebook-square",
            color: "blue.800",
          }}
        />
        <IconButton
          size="lg"
          variant="unstyled"
          _icon={{
            as: FontAwesome,
            name: "google",
            color: "red.600",
          }}
        />
        <IconButton
          size="lg"
          variant="unstyled"
          _icon={{
            as: FontAwesome,
            name: "apple",
            color: "primary.600",
          }}
        />
      </Center>
    </VStack>
  );
};

const Password = () => {
  const conditions = [
    {
      label: "8+ caracteres",
      isChecked: (text) => text.length > 8,
    },
    {
      label: "1 simbolo ( ! _ @ # $ % & ? )",
      isChecked: (text) => text.match(/[_!@#$%&?]/),
    },
    {
      label: "1 letra mayuscula",
      isChecked: (text) => text.match(/(?=.*[A-Z])/),
    },
    {
      label: "1 numero",
      isChecked: (text) => text.match(/(?=.*\d)/),
    },
  ];
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (text) => {
    setError(false);
    if (
      text.length > 8 ||
      text.match(/(?=.*[A-Z])/) ||
      text.match(/[_!@#$%&?]/) ||
      text.match(/(?=.*\d)/)
    ) {
      setError(true);
    }

    setValue(text.trim());
  };

  return (
    <VStack space="10" w="5/6">
      <Center>
        <Input
          variant="outline"
          placeholder="Contraseña"
          height="12"
          borderColor="primary.600"
          value={value}
          type="password"
          onChangeText={handleChange}
        />
      </Center>
      <Box>
        {conditions.map((item, key) => (
          <Checkbox
            key={key}
            value={item.label}
            my={2}
            isDisabled
            isChecked={item.isChecked(value)}
            colorScheme="green"
            _text={{
              color: item.isChecked(value) ? "green.600" : "primary.600",
            }}
          >
            {item.label}
          </Checkbox>
        ))}
      </Box>
      <Center>
        <Text color="gray.400">o ingresa con</Text>
      </Center>
      <Center flexDirection="row">
        <IconButton
          size="lg"
          variant="unstyled"
          _icon={{
            as: FontAwesome,
            name: "facebook-square",
            color: "blue.800",
            size: "2xl",
          }}
        />
        <IconButton
          size="lg"
          variant="unstyled"
          icon={
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png",
              }}
              alt="google logo"
              size={8}
            />
          }
        />
        <IconButton
          size="lg"
          variant="unstyled"
          _icon={{
            as: FontAwesome,
            name: "apple",
            color: "primary.600",
            size: "2xl",
          }}
        />
      </Center>
    </VStack>
  );
};
