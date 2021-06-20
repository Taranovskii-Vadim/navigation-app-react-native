import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { THEME, isAndroid } from "../constants";

import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: {
      screen: PostScreen,
    },
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: isAndroid() ? "white" : THEME.MAIN_COLOR,
      },
      headerTintColor: isAndroid() ? THEME.MAIN_COLOR : "#fff",
    },
  }
);

export const AppNavigation = createAppContainer(PostNavigator);
