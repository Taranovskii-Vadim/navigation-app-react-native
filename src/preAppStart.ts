import * as Font from "expo-font";
import { Database } from "./db";

export const preAppStart = async () => {
  try {
    await Font.loadAsync({
      "open-bold": require("../src/fonts/OpenSans-Bold.ttf"),
      "open-regular": require("../src/fonts/OpenSans-Regular.ttf"),
    });
    await Database.init();
  } catch (e) {
    console.log(e);
  }
};
