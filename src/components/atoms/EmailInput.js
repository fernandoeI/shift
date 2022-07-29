import { Center, Stack, useTheme } from "native-base";
import React from "react";
import { OutlinedTextField } from "rn-material-ui-textfield";

export default EmailInput = () => {
  const theme = useTheme();
  return (
    <Stack width="100%" px={6}>
      <OutlinedTextField
        label="Email"
        keyboardType="email-address"
        baseColor={theme.colors.primary[600]}
        lineWidth={2}
      />
    </Stack>
  );
};
