import { Platform } from "react-native";

export const isAndroid = () => Platform.OS === "android";

export const THEME = {
  MAIN_COLOR: "#303f9f",
  DANGER_COLOR: "#d81b60",
  HORIZONTAL_PADD: 15,
};
