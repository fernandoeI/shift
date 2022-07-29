import { Box, Pressable, Stack } from "native-base";
import React from "react";

export default ChooseColor = ({ selectedColor, setSelectedColor }) => {
  const data = ["primary.600", "primary.700", "primary.800", "primary.900"];
  const onPressHandler = (item) => {
    setSelectedColor(item);
  };

  return (
    <Stack
      justifyContent="center"
      direction="row"
      flexWrap="wrap"
      maxWidth="xs"
      px="16"
    >
      {data.map((item, key) => (
        <Pressable onPress={() => onPressHandler(item)} key={key}>
          <Box
            borderColor={selectedColor === item ? item : "transparent"}
            borderWidth="2"
            rounded="100"
            m="1"
          >
            <Box bg={item} p="7" rounded="100" m={1} />
          </Box>
        </Pressable>
      ))}
    </Stack>
  );
};
