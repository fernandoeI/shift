import {
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "native-base";
import React from "react";

export default function Welcome() {
  return (
    <Center flex={1} paddingX={10} safeArea>
      <Center flex={1}>
        <Heading fontWeight="semibold" textAlign="center">
          Te damos la bienvenida a The Shift
        </Heading>
        <Text my={10} px={2} textAlign="center">
          Descripción breve y concisa al usuario explicando lo que encontrará en
          la aplicación, los usos que tiene o algo promocional.
        </Text>
        <Image
          source={require("../assets/images/logo.png")}
          alt="logo"
          size={"40"}
          resizeMode="contain"
        />
      </Center>
      <Flex pb={6}>
        <Button width="80">¡Empecemos!</Button>
        <Text mt={4} textAlign="center" color="gray.400">
          ¿Ya tienes una cuenta?{" "}
          <Text onPress={() => console.log("Login screen")} color="darkText">
            Inicia sesión
          </Text>
        </Text>
      </Flex>
    </Center>
  );
}
