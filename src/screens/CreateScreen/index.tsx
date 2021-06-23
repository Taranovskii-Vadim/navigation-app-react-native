import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

import { AppIcon } from "../../components/ui/AppIcon";
import { THEME } from "../../constants";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const CreateScreen = () => (
  <View style={styles.root}>
    <Text>CreateScreen</Text>
  </View>
);

CreateScreen.navigationOptions = ({ navigation }: any) => {
  return {
    headerTitle: "Добавить пост",
    headerLeft: () => (
      <AppIcon onPress={() => navigation.toggleDrawer()}>
        <Ionicons
          style={{ marginLeft: 15 }}
          size={25}
          color={THEME.MAIN_COLOR}
          name='list-outline'
        ></Ionicons>
      </AppIcon>
    ),
  };
};
