import { Stack } from "native-base";
import React from "react";
import EmailInput from "../../components/atoms/EmailInput";
import SocialMedia from "../../components/atoms/SocialMedia";

export default SignupEmail = () => {
  return (
    <Stack space="10" alignItems="center" width="100%">
      <EmailInput />
      <SocialMedia />
    </Stack>
  );
};
