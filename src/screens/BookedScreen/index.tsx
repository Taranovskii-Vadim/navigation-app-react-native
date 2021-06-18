import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const BookedScreen = () => {
  return (
    <View style={styles.root}>
      <Text>BookedScreen</Text>
    </View>
  );
};
