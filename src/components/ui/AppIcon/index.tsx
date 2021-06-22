import React from "react";
import { TouchableOpacity } from "react-native";

interface IProps {
  children: any;
  onPress: () => void;
}

export const AppIcon = ({ children, onPress }: IProps): JSX.Element => (
  <TouchableOpacity onPress={onPress} style={{ backgroundColor: "#fff" }}>
    {children}
  </TouchableOpacity>
);
