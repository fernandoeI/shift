import { Checkbox } from "native-base";
import React from "react";

export default ChooseHabits = ({ groupValues, setGroupValues }) => {
  const habits = [
    "Comer mejor",
    "Estar en forma",
    "Tener mejor condición fisíca",
  ];
  return (
    <Checkbox.Group
      onChange={setGroupValues}
      value={groupValues}
      accessibilityLabel="choose numbers"
    >
      {habits.map((item, key) => (
        <Checkbox value={item} my={2} key={key}>
          {item}
        </Checkbox>
      ))}
    </Checkbox.Group>
  );
};
