import { Center, Pressable, Stack, Text } from "native-base";
import React from "react";

export default ChooseHobbies = ({ selectedItems, setSelectedItems }) => {
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
