import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Post } from "../../components/Post";
import { DATA, THEME } from "../../constants";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
    paddingHorizontal: THEME.HORIZONTAL_PADD,
  },
});

interface IProps {
  navigation: any;
}

export const MainScreen = ({ navigation }: IProps): JSX.Element => {
  const goToPost = (postId: string, title: string) =>
    navigation.navigate("Post", { postId, title });

  return (
    <View style={styles.root}>
      <FlatList
        style={{ width: "100%" }}
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => (
          <Post post={item} goToPost={() => goToPost(item.id, item.text)} />
        )}
      />
    </View>
  );
};

MainScreen.navigationOptions = {
  headerTitle: "Главная страница",
};
