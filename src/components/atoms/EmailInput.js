import { Center, Input } from "native-base";
import React from "react";

export default EmailInput = () => {
  return (
    <Center>
      <Input
        variant="outline"
        placeholder="Email"
        height="12"
        borderColor="primary.600"
      />
    </Center>
  );
};
