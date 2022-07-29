import React from "react";
import {
  Box,
  Center,
  FlatList,
  Image,
  Pressable,
  ScrollView,
} from "native-base";

export default ChooseImageProfile = ({ selectedItem, setSelectedItem }) => {
  const onPressHandler = (id) => {
    setSelectedItem(id);
  };
  const data = [
    {
      id: 1,
      avatarName: require("../../../assets/images/profile/Bear.png"),
    },
    {
      id: 2,
      avatarName: require("../../../assets/images/profile/Cat.png"),
    },
    {
      id: 3,
      avatarName: require("../../../assets/images/profile/Delicious.png"),
    },
    {
      id: 4,
      avatarName: require("../../../assets/images/profile/FaceMask.png"),
    },
    {
      id: 5,
      avatarName: require("../../../assets/images/profile/Pinata.png"),
    },
    {
      id: 6,
      avatarName: require("../../../assets/images/profile/Pumpking.png"),
    },
    {
      id: 7,
      avatarName: require("../../../assets/images/profile/Smile.png"),
    },
  ];

  return (
    <Center maxHeight={"32"}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignContent: "center" }}
      >
        <FlatList
          extraData={selectedItem}
          data={data}
          keyExtractor={(i, index) => {
            return i.id;
          }}
          horizontal={true}
          flexDirection="row"
          style={{ alignItems: "center" }}
          renderItem={({ item }) => (
            <Pressable onPress={() => onPressHandler(item.id)}>
              <Box
                shadow={1}
                style={{
                  shadowColor: "rgba(0,0,0, 0.4)",
                }}
                bg={selectedItem === item.id ? "primary.600" : "white"}
                p={selectedItem === item.id ? "4" : "2.5"}
                rounded="5"
                m="4"
              >
                <Image
                  source={item.avatarName}
                  alt="profile"
                  size="12"
                  resizeMode="contain"
                />
              </Box>
            </Pressable>
          )}
        />
      </ScrollView>
    </Center>
  );
};
