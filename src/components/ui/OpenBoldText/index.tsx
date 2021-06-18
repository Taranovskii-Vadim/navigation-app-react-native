import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

const styles = StyleSheet.create({
  root: {
    fontSize: 14,
    fontFamily: "open-bold",
  },
});

interface IProps {
  style?: TextStyle;
}

export const OpenBoldText: React.FC<IProps> = ({ children, style }) => (
  <Text style={{ ...styles.root, ...style }}>{children}</Text>
);
