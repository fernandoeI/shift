import { VStack } from "native-base";
import React from "react";
import EmailInput from "../../components/atoms/EmailInput";
import SocialMedia from "../../components/atoms/SocialMedia";

export default SignupEmail = () => {
  return (
    <VStack space="10" alignItems="center" w="5/6">
      <EmailInput />
      <SocialMedia />
    </VStack>
  );
};
