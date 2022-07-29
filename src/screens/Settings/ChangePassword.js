import { Button, Stack, useTheme } from "native-base";
import React from "react";
import { OutlinedTextField } from "rn-material-ui-textfield";
import Layout from "../../components/atoms/Layout";

export default ChangePassword = () => {
  const theme = useTheme();

  return (
    <Layout subtitle="Cambiar contraseña">
      <Stack space={4} justifyContent="space-between" height="91%" pt={4}>
        <Stack space={4} mt={4}>
          <OutlinedTextField
            label="Contraseña actual"
            baseColor={theme.colors.primary[600]}
            lineWidth={2}
            textContentType="password"
            secureTextEntry
          />
          <OutlinedTextField
            label="Nueva contraseña "
            baseColor={theme.colors.primary[600]}
            lineWidth={2}
            textContentType="password"
            secureTextEntry
          />
          <OutlinedTextField
            label="Confirmar contraseña "
            baseColor={theme.colors.primary[600]}
            lineWidth={2}
            textContentType="password"
            secureTextEntry
          />
        </Stack>
        <Stack>
          <Button onPress={() => navigation.navigate("Stepper")}>
            Guardar
          </Button>
        </Stack>
      </Stack>
    </Layout>
  );
};
