import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { Post } from "../Post";

import { IPost, THEME } from "../../constants";

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
  data: Array<IPost>;
  onOpenPost: (postId: string, title: string, booked: boolean) => void;
}

export const PostList = ({ data, onOpenPost }: IProps): JSX.Element => (
  <View style={styles.root}>
    <FlatList
      style={{ width: "100%" }}
      data={data}
      keyExtractor={post => post.id.toString()}
      renderItem={({ item }) => (
        <Post
          post={item}
          goToPost={() => onOpenPost(item.id, item.text, item.booked)}
        />
      )}
    />
  </View>
);
