import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { DATA, THEME } from "../../constants";

import { AppIcon } from "../../components/ui/AppIcon";
import { PostList } from "../../components/PostList";

interface IProps {
  navigation: any;
}

export const MainScreen = ({ navigation }: IProps): JSX.Element => {
  const goToPost = (postId: string, title: string, booked: boolean) =>
    navigation.navigate("Post", { postId, title, booked });

  return <PostList data={DATA} onOpenPost={goToPost} />;
};

MainScreen.navigationOptions = {
  headerTitle: "Главная страница",
  headerRight: () => (
    <AppIcon onPress={() => console.log("photo")}>
      <Ionicons
        style={{ marginRight: 15 }}
        size={25}
        color={THEME.MAIN_COLOR}
        name='ios-camera'
      ></Ionicons>
    </AppIcon>
  ),
  headerLeft: () => (
    <AppIcon onPress={() => console.log("list")}>
      <Ionicons
        style={{ marginLeft: 15 }}
        size={25}
        color={THEME.MAIN_COLOR}
        name='list-outline'
      ></Ionicons>
    </AppIcon>
  ),
};
