import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { DATA, IPost } from "../../constants";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
interface IProps {
  navigation: any;
}

export const PostScreen = ({ navigation }: IProps): JSX.Element => {
  const [post, setPost] = useState<IPost | null>(() => null);

  useEffect(() => {
    const post = DATA.find(item => item.id === navigation.getParam("postId"));
    if (post) {
      setPost(post);
    }
  }, [navigation]);

  return (
    <View style={styles.root}>
      <Text>{post?.text}</Text>
    </View>
  );
};

PostScreen.navigationOptions = {
  headerTitle: "Пост номер 42",
};
