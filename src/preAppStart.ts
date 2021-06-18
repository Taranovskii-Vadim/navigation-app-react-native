import * as Font from "expo-font";

export const preAppStart = async () => {
  try {
    await Font.loadAsync({
      "open-bold": require("../src/fonts/OpenSans-Bold.ttf"),
      "open-regular": require("../src/fonts/OpenSans-Regular.ttf"),
    });
  } catch (e) {
    console.log(e);
  }
};
