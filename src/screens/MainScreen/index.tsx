import React from "react";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import { THEME } from "../../constants";

import { AppIcon } from "../../components/ui/AppIcon";
import { PostList } from "../../components/PostList";

import { selectPosts } from "../../store/models/Post/selectors";

interface IProps {
  navigation: any;
}

export const MainScreen = ({ navigation }: IProps): JSX.Element => {
  const posts = useSelector(selectPosts);

  const goToPost = (postId: string, title: string, booked: boolean) =>
    navigation.navigate("Post", { postId, title, booked });

  return <PostList data={posts} onOpenPost={goToPost} />;
};

MainScreen.navigationOptions = ({ navigation }: any) => {
  return {
    headerTitle: "Главная страница",
    headerRight: () => (
      <AppIcon onPress={() => navigation.push("Create")}>
        <Ionicons
          style={{ marginRight: 15 }}
          size={25}
          color={THEME.MAIN_COLOR}
          name='ios-camera'
        ></Ionicons>
      </AppIcon>
    ),
    headerLeft: () => (
      <AppIcon onPress={() => navigation.toggleDrawer()}>
        <Ionicons
          style={{ marginLeft: 15 }}
          size={25}
          color={THEME.MAIN_COLOR}
          name='list-outline'
        ></Ionicons>
      </AppIcon>
    ),
  };
};
