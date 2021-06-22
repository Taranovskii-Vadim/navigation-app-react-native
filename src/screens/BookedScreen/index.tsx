import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { DATA, THEME } from "../../constants";

import { PostList } from "../../components/PostList";
import { AppIcon } from "../../components/ui/AppIcon";

interface IProps {
  navigation: any;
}

export const BookedScreen = ({ navigation }: IProps): JSX.Element => {
  const goToPost = (postId: string, title: string, booked: boolean) =>
    navigation.navigate("Post", { postId, title, booked });

  return (
    <PostList data={DATA.filter(item => item.booked)} onOpenPost={goToPost} />
  );
};

BookedScreen.navigationOptions = {
  headerTitle: "Главная страница",
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
