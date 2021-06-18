import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
      <Text>AboutScreen</Text>
    </View>
  );
};
