import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { AboutScreen } from "./AboutScreen";

const styles = StyleSheet.create({});

export const ProtectedScreens = () => {
  return (
    <View style={{ flex: 1 }}>
      <AboutScreen />
    </View>
  );
};
