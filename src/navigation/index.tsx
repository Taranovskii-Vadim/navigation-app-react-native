import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import { THEME, isAndroid } from "../constants";
import { BookedScreen } from "../screens/BookedScreen";

import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { CreateScreen } from "../screens/CreateScreen";

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

const TabsNavigator = createBottomTabNavigator(
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

const AboutNavigator = createStackNavigator(
  {
    About: AboutScreen,
  },
  COMMON_CONFIG
);

const CreateNavigator = createStackNavigator(
  {
    Create: CreateScreen,
  },
  COMMON_CONFIG
);

const MainNavigator = createDrawerNavigator(
  {
    PostTabs: {
      screen: TabsNavigator,
      navigationOptions: {
        drawerLabel: "Главная",
      },
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerLabel: "О приложении",
      },
    },
    Create: {
      screen: CreateNavigator,
      navigationOptions: {
        drawerLabel: "Новый пост",
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: THEME.MAIN_COLOR,
      labelStyle: {
        fontFamily: "open-bold",
      },
    },
  }
);

export const AppNavigation = createAppContainer(MainNavigator);
