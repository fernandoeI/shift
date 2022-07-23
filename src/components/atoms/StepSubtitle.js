import { Center, Text } from "native-base";
import React from "react";

export default StepSubtitle = ({ subtitle }) => {
  return (
    <Center>
      <Text px={16} my={12} textAlign="center" color="muted.500">
        {subtitle}
      </Text>
    </Center>
  );
};
