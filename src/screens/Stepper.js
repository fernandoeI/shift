import React, { useState, useRef } from "react";
import { Box, useTheme } from "native-base";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import StepTitle from "../components/atoms/StepTitle";
import ChooseColor from "../components/atoms/ChooseColor";
import StepSubtitle from "../components/atoms/StepSubtitle";
import ChooseImageProfile from "../components/atoms/Stepper/ChooseImageProfile";
import ChooseHabits from "../components/atoms/Stepper/ChooseHabits";
import SignupEmail from "../components/molecules/SignupEmail";
import SignupPassword from "../components/atoms/Stepper/SignupPassword";
import ChooseHobbies from "../components/atoms/Stepper/ChooseHobbies";

const Dots = () => {
  return (
    <Box
      style={{
        display: "none",
      }}
    />
  );
};

export default Stepper = () => {
  const onboardingRef = useRef(null);
  const theme = useTheme();
  const navigation = useNavigation();
  const [step, setStep] = useState(0);
  const [selectedItem, setSelectedItem] = useState([]);
  const [groupValues, setGroupValues] = useState([]);
  const [value, setValue] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedColor, setSelectedColor] = useState();

  const pages = [
    // PASO 1
    {
      backgroundColor: theme.colors.white,
      image: <StepTitle title="Escoge un color" step={1} />,
      title: (
        <ChooseColor
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      ),
      subtitle: (
        <StepSubtitle subtitle="Personaliza la app a tu gusto, selecciona uno de los colores para aplicarlo." />
      ),
    },
    // PASO 2
    {
      backgroundColor: theme.colors.white,
      image: <StepTitle title="Foto de perfil" step={2} />,
      title: (
        <ChooseImageProfile
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      ),
      subtitle: (
        <StepSubtitle subtitle="Puedes seleccionar alguna de estas opciones o a??adir alguna foto para tu imagen de perfil." />
      ),
    },
    // PASO 3
    {
      backgroundColor: theme.colors.white,
      image: <StepTitle title="??Cu??les son tus intereses?" step={3} />,
      title: (
        <ChooseHobbies
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      ),
      subtitle: (
        <StepSubtitle subtitle="Siempre podr??s modificar tus preferencias despu??s" />
      ),
    },
    // PASO 4
    {
      backgroundColor: theme.colors.white,
      image: <StepTitle title="??Qu?? h??bitos deseas trabajar?" step={4} />,
      title: (
        <ChooseHabits
          groupValues={groupValues}
          setGroupValues={setGroupValues}
        />
      ),
      subtitle: (
        <StepSubtitle subtitle="Podr??s configurar tus h??bitos en cualquier momento." />
      ),
    },
    // PASO 5
    {
      backgroundColor: theme.colors.white,
      image: <StepTitle title="Ingresa tu correo" step={5} />,
      title: <SignupEmail />,
      subtitle: <></>,
    },
    // PASO 6
    {
      backgroundColor: theme.colors.white,
      image: <StepTitle title="Ingresa tu contrase??a" step={6} />,
      title: <SignupPassword value={value} setValue={setValue} />,
      subtitle: <></>,
    },
  ];

  return (
    <Onboarding
      ref={onboardingRef}
      bottomBarHighlight={false}
      containerStyles={{ backgroundColor: theme.colors.white }}
      onDone={() => navigation.navigate("Settings")}
      skipLabel="Volver"
      nextLabel="Siguiente"
      DotComponent={Dots}
      onSkip={() => {
        if (step === 0) return navigation.navigate("Welcome");
        onboardingRef.current.goToPage(step - 1, true);
      }}
      pageIndexCallback={(index) => setStep(index)}
      flatlistProps={{ scrollEnabled: false }}
      pages={pages}
    />
  );
};
