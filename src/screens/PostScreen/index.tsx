import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const PostScreen = () => {
  return (
    <View style={styles.root}>
      <Text>PostScreen</Text>
    </View>
  );
};
