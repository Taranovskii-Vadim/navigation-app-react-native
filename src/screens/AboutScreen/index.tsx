import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

import { AppIcon } from "../../components/ui/AppIcon";
import { OpenRegularText } from "../../components/ui/OpenRegularText";
import { OpenBoldText } from "../../components/ui/OpenBoldText";

import { THEME } from "../../constants";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const AboutScreen = () => (
  <View style={styles.root}>
    <OpenRegularText style={{ textAlign: "center", marginBottom: 15 }}>
      Приложение где я тестил как работает навигация в React Native
    </OpenRegularText>
    <OpenRegularText>
      Версия приложения: <OpenBoldText>1.0.0</OpenBoldText>
    </OpenRegularText>
  </View>
);

AboutScreen.navigationOptions = ({ navigation }: any) => {
  return {
    headerTitle: "О приложении",
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
