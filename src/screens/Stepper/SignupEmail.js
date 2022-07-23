import { FontAwesome } from "@expo/vector-icons";
import { Center, IconButton, Image, Input, Text, VStack } from "native-base";
import React from "react";

export default SignupEmail = () => {
  return (
    <VStack space="10" alignItems="center" w="5/6">
      <Center>
        <Input
          variant="outline"
          placeholder="Email"
          height="12"
          borderColor="primary.600"
        />
      </Center>

      <Center>
        <Text color="gray.400">o ingresa con</Text>
      </Center>
      <Center flexDirection="row">
        <IconButton
          size="lg"
          variant="unstyled"
          _icon={{
            as: FontAwesome,
            name: "facebook-square",
            color: "blue.800",
            size: "2xl",
          }}
        />
        <IconButton
          size="lg"
          variant="unstyled"
          icon={
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png",
              }}
              alt="google logo"
              size={8}
            />
          }
        />
        <IconButton
          size="lg"
          variant="unstyled"
          _icon={{
            as: FontAwesome,
            name: "apple",
            color: "primary.600",
            size: "2xl",
          }}
        />
      </Center>
    </VStack>
  );
};
