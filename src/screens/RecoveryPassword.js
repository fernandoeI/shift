import { Button, Center, Stack, Text } from "native-base";
import React from "react";
import EmailInput from "../components/atoms/EmailInput";
import Layout from "../components/atoms/Layout";
import { useNavigation } from "@react-navigation/native";

export default RecoveryPassword = () => {
  const navigation = useNavigation();
  return (
    <Layout title="Reestablece tu contraseña">
      <Stack justifyContent="center" space="2/6" height="85%">
        <Stack space="10" justifyContent="flex-end" height="42%">
          <Text textAlign="center" px={1} fontSize={16}>
            Si el correo pertenece a una cuenta valida, enviaremos un enlace
            para reestablecer tu contraseña.
          </Text>
          <EmailInput />
        </Stack>

        <Button onPress={() => navigation.navigate("Stepper")}>Enviar</Button>
      </Stack>
    </Layout>
  );
};
