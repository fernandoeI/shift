import { Avatar, Button, IconButton, Stack, Text } from "native-base";
import React, { useState } from "react";
import { OutlinedTextField } from "rn-material-ui-textfield";
import Layout from "../../components/atoms/Layout";
import { useTheme } from "native-base";
import { Feather } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import "moment/locale/es-mx";

export default EditProfile = () => {
  const theme = useTheme();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  return (
    <Layout subtitle="Editar perfil">
      <Stack space={4} justifyContent="space-between" height="91%" pt={4}>
        <Stack space={4} pt={4}>
          <Stack direction="row" alignItems="center" space={4}>
            <Avatar
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
              size="lg"
            />
            <Text>Editar foto de perfil</Text>
          </Stack>
          <OutlinedTextField
            label="Nombre"
            keyboardType="name-phone-pad"
            baseColor={theme.colors.primary[600]}
            lineWidth={2}
          />

          <OutlinedTextField
            label="Fecha de nacimiento"
            editable={false}
            baseColor={theme.colors.primary[600]}
            value={moment(selectedDate).format("LL")}
            lineWidth={2}
            renderRightAccessory={() => (
              <IconButton
                onPress={showDatePicker}
                size="lg"
                variant="unstyled"
                _icon={{
                  as: Feather,
                  name: "calendar",
                  color: "primary.600",
                  size: "lg",
                }}
                px={0}
                py={0}
              />
            )}
          />

          <OutlinedTextField
            label="Bio"
            keyboardType="default"
            baseColor={theme.colors.primary[600]}
            lineWidth={2}
            multiline
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </Stack>
        <Stack>
          <Button onPress={() => navigation.navigate("Stepper")}>
            Guardar
          </Button>
        </Stack>
      </Stack>
    </Layout>
  );
};
