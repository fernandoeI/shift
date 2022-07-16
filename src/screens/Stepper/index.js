import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Button,
  Center,
  Checkbox,
  FlatList,
  Heading,
  IconButton,
  Image,
  Input,
  Pressable,
  ScrollView,
  Text,
  useTheme,
  VStack,
} from "native-base";
import Onboarding from "react-native-onboarding-swiper";
import { FontAwesome } from "@expo/vector-icons";

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
          title: <Interests />,
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
          style={{ alignContent: "center" }}
          renderItem={({ item }) => (
            <Pressable onPress={() => onPressHandler(item.id)}>
              <Box
                shadow={1}
                style={{
                  shadowColor: "rgba(0,0,0, 0.4)",
                }}
                bg={selectedItem === item.id ? "primary.600" : "white"}
                p={selectedItem === item.id ? "3" : "2.5"}
                rounded="5"
                m={"4"}
              >
                <Image
                  source={item.avatarName}
                  alt="profile"
                  size="10"
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

const Interests = () => {
  const [selectedItem, setSelectedItem] = useState();
  const onPressHandler = (id) => {
    setSelectedItem(id);
    console.log(selectedItem);
  };

  const data = [
    {
      id: 1,
      name: "Body",
    },
    {
      id: 2,
      name: "Mind",
    },
    {
      id: 3,
      name: "Nutrición",
    },
    {
      id: 4,
      name: "Talleres",
    },
  ];
  return (
    <Center maxHeight="80">
      {data.map((item) => (
        <Pressable
          onPress={() => {
            onPressHandler(item.id);
          }}
          key={item.id}
        >
          <Box
            maxW="9672"
            shadow={4}
            bg={selectedItem === item.id ? "primary.600" : "white"}
            p="6"
            rounded="100"
            m={2.5}
          />
        </Pressable>
      ))}
    </Center>
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
    "8+ caracteres",
    "2 simbolos",
    "1 letra mayuscula",
    "1 numero",
  ];
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (text) => setValue(text);

  useEffect(() => {
    value.length > 8
      ? console.log("La contraseña es mayor a 8 caracteres")
      : console.log("La contraseña no cumple con la longitud");
    value.charAt(0) === value.charAt(0).toUpperCase()
      ? console.log("La contraseña empieza con mayuscula")
      : console.log("La contraseña no empieza con mayuscula");
  }, [value]);

  return (
    <VStack space="10" w="5/6">
      <Center>
        <Input
          variant="outline"
          placeholder="Contraseña"
          height="12"
          borderColor="primary.600"
          value={value}
          onChangeText={handleChange}
        />
      </Center>
      <Box>
        {conditions.map((item) => {
          return (
            <Checkbox value={item} my={2} key={item} isChecked={isChecked}>
              {item}
            </Checkbox>
          );
        })}
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
