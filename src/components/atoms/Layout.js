import React from "react";
import { Center, Flex, Heading, IconButton, Pressable } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default Layout = ({ children, title }) => {
  const navigation = useNavigation();
  return (
    <Flex align="flex-start" safeAreaTop safeAreaBottom>
      <IconButton
        onPress={() => navigation.goBack()}
        size="lg"
        variant="unstyled"
        _icon={{
          as: Ionicons,
          name: "chevron-back",
          color: "primary.600",
          size: "2xl",
        }}
      />

      <Flex px={6} width="100%">
        <Heading fontWeight="semibold" fontSize={36}>
          {title}
        </Heading>
        {children}
      </Flex>
    </Flex>
  );
};
