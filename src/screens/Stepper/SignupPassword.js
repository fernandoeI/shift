import { Box, Center, Checkbox, Input, VStack } from "native-base";
import React, { useState } from "react";

export default SignupPassword = ({ value, setValue }) => {
  const conditions = [
    {
      label: "8+ caracteres",
      isChecked: (text) => text.length > 8,
    },
    {
      label: "1 simbolo ( ! _ @ # $ % & ? )",
      isChecked: (text) => text.match(/[_!@#$%&?]/),
    },
    {
      label: "1 letra mayuscula",
      isChecked: (text) => text.match(/(?=.*[A-Z])/),
    },
    {
      label: "1 numero",
      isChecked: (text) => text.match(/(?=.*\d)/),
    },
  ];
  const [error, setError] = useState(false);

  const handleChange = (text) => {
    setError(false);
    if (
      text.length > 8 ||
      text.match(/(?=.*[A-Z])/) ||
      text.match(/[_!@#$%&?]/) ||
      text.match(/(?=.*\d)/)
    ) {
      setError(true);
    }

    setValue(text.trim());
  };

  return (
    <VStack space="10" w="5/6">
      <Center>
        <Input
          variant="outline"
          placeholder="Contraseña"
          height="12"
          borderColor="primary.600"
          value={value}
          type="password"
          onChangeText={handleChange}
        />
      </Center>
      <Box>
        {conditions.map((item, key) => (
          <Checkbox
            key={key}
            value={item.label}
            my={2}
            isDisabled
            isChecked={item.isChecked(value)}
            colorScheme="green"
            _text={{
              color: item.isChecked(value) ? "green.600" : "primary.600",
            }}
          >
            {item.label}
          </Checkbox>
        ))}
      </Box>
    </VStack>
  );
};
