import { Button, Input, Stack, Text, VStack } from "native-base";
import React from "react";
import EmailInput from "../components/atoms/EmailInput";
import Layout from "../components/atoms/Layout";
import SocialMedia from "../components/atoms/SocialMedia";
import { useNavigation } from "@react-navigation/native";

export default SignIn = () => {
  const navigation = useNavigation();
  return (
    <Layout title="¡Qué gusto tenerte de vuelta Shifter!">
      <Stack justifyContent="center" height="85%" space="1/6">
        <VStack space={4}>
          <EmailInput />
          <Input
            variant="outline"
            placeholder="Contraseña"
            height="12"
            borderColor="primary.600"
            type="password"
          />
          <Text
            color="gray.400"
            textAlign="right"
            onPress={() => navigation.navigate("Recovery")}
          >
            ¿Olvidaste tu contraseña?
          </Text>
        </VStack>
        <SocialMedia />
        <Button onPress={() => console.log("holi")}>Iniciar sesión</Button>
      </Stack>
    </Layout>
  );
};
