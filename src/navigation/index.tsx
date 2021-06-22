import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import { THEME, isAndroid } from "../constants";
import { BookedScreen } from "../screens/BookedScreen";

import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";

const COMMON_CONFIG = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: isAndroid() ? "white" : THEME.MAIN_COLOR,
    },
    headerTintColor: isAndroid() ? THEME.MAIN_COLOR : "#fff",
  },
};

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: PostScreen,
  },
  COMMON_CONFIG
);

const FooterNavigator = createStackNavigator(
  {
    Booked: BookedScreen,
    Post: PostScreen,
  },
  COMMON_CONFIG
);

const GeneralNavigator = createBottomTabNavigator(
  {
    Post: {
      screen: PostNavigator,
      navigationOptions: {
        tabBarLabel: "Все",
        tabBarIcon: info => (
          <Ionicons name='ios-albums' size={25} color={info.tintColor} />
        ),
      },
    },
    Booked: {
      screen: FooterNavigator,
      navigationOptions: {
        tabBarLabel: "Избранное",
        tabBarIcon: info => (
          <Ionicons name='ios-star' size={25} color={info.tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: THEME.MAIN_COLOR,
    },
  }
);

export const AppNavigation = createAppContainer(GeneralNavigator);
