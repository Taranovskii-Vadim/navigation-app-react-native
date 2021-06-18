import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

const styles = StyleSheet.create({
  root: {
    fontSize: 14,
    fontFamily: "open-regular",
  },
});

interface IProps {
  style?: TextStyle;
}

export const OpenRegularText: React.FC<IProps> = ({ children, style }) => (
  <Text style={{ ...styles.root, ...style }}>{children}</Text>
);
