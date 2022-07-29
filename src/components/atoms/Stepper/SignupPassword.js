import {
  Box,
  Center,
  Checkbox,
  Input,
  Stack,
  useTheme,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { OutlinedTextField } from "rn-material-ui-textfield";

export default SignupPassword = ({ value, setValue }) => {
  const theme = useTheme();
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
    <Stack space="10" width="100%" px={6}>
      <Stack>
        <OutlinedTextField
          label="Contraseña"
          baseColor={theme.colors.primary[600]}
          lineWidth={2}
          value={value}
          onChangeText={handleChange}
          textContentType="password"
          secureTextEntry
        />
      </Stack>
      <Stack>
        {conditions.map((item, key) => (
          <Checkbox
            key={key}
            value={item.label}
            isReadOnly
            my={2}
            isChecked={item.isChecked(value)}
            colorScheme="green"
            _text={{
              color: item.isChecked(value) ? "green.600" : "primary.600",
            }}
          >
            {item.label}
          </Checkbox>
        ))}
      </Stack>
    </Stack>
  );
};
