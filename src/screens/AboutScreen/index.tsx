import React from "react";
import { View, StyleSheet } from "react-native";

import { OpenRegularText } from "../../components/ui/OpenRegularText";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const AboutScreen = () => {
  return (
    <View style={styles.root}>
      <OpenRegularText>AboutScreen</OpenRegularText>
    </View>
  );
};
