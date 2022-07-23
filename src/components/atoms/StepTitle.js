import { Heading, Text, VStack } from "native-base";
import React from "react";

export default StepTitle = ({ title, step }) => {
  return (
    <VStack space={4} alignItems="center">
      <Text fontSize="xs" letterSpacing={0.5}>
        PASO {step}/5
      </Text>
      <Heading fontWeight="semibold" textAlign="center">
        {title}
      </Heading>
    </VStack>
  );
};
