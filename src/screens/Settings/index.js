import { Box, Divider, FlatList, Flex, IconButton, Text } from "native-base";
import React from "react";
import { Platform, Pressable } from "react-native";
import Layout from "../../components/atoms/Layout";
import { useNavigation } from "@react-navigation/native";
import ListItem from "../../components/atoms/ListItem";

export default Settings = () => {
  const data = [
    {
      option: "Editar perfil",
      screen: "EditProfile",
    },
    {
      option: "Cambiar contraseña",
      screen: "Sujitha Mathur",
    },
    {
      option: "Personaliza tu app",
      screen: "Anci Barroco",
    },
    {
      option: "Quiz de edad mental",
      screen: "Aniket Kumar",
    },
    {
      option: "Calendario de actividades",
      screen: "Kiara",
    },
    {
      option: "Comparte con tus amigos",
      share: true,
    },
    {
      option: "Términos de servicio",
      screen: "Kiara",
    },
    {
      option: "Políticas de privacidad",
      screen: "Kiara",
    },
    {
      option: "divider",
    },
    { option: "Cerrar sesión", noIcon: true },
    { option: "Borrar cuenta", noIcon: true, color: "red.500" },
  ];
  const navigation = useNavigation();
  return (
    <Layout title="Ajustes">
      <Box mt={3}>
        <FlatList
          data={data}
          renderItem={({ item }) =>
            item?.option === "divider" ? (
              <Divider mt={3} />
            ) : (
              <ListItem item={item} navigation={navigation} />
            )
          }
          keyExtractor={(item) => item.option}
        />
      </Box>
    </Layout>
  );
};
