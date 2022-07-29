import { Button, Stack, Text } from "native-base";
import React, { useState } from "react";
import Layout from "../../components/atoms/Layout";
import ChooseColor from "../../components/atoms/ChooseColor";

export default CustomizeTheme = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <Layout subtitle="Personaliza tu app">
      <Stack justifyContent="center" alignItems="center" space={4} height="90%">
        <Text textAlign="center" width="80%">
          Selecciona uno de los colores para cambiar el aspecto de tu app.
        </Text>
        <ChooseColor
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </Stack>
    </Layout>
  );
};
