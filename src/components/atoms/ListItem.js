import { Flex, IconButton, Pressable, Text } from "native-base";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default ListItem = ({ item, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate(item?.screen)}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
        height={16}
      >
        <Text fontSize={16} color={item?.color || "primary.600"}>
          {item.option}
        </Text>
        {!item?.noIcon ? (
          <IconButton
            size="lg"
            variant="unstyled"
            _icon={{
              as: item?.share ? MaterialIcons : Ionicons,
              name: item?.share
                ? Platform.OS === "ios"
                  ? "ios-share"
                  : "share"
                : "chevron-forward",
              color: "primary.600",
              size: "lg",
            }}
            px={0}
          />
        ) : null}
      </Flex>
    </Pressable>
  );
};
