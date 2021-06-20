import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { IPost, THEME } from "../../constants";

import { OpenBoldText } from "../ui/OpenBoldText";

interface IProps {
  post: IPost;
  goToPost: () => void;
}

const styles = StyleSheet.create({
  root: {
    marginBottom: 15,
    overflow: "hidden",
    borderRadius: 5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  text: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    alignItems: "center",
    width: "100%",
  },
  title: {
    color: "white",
  },
});

export const Post = ({ post, goToPost }: IProps): JSX.Element => (
  <TouchableOpacity style={styles.root} activeOpacity={0.7} onPress={goToPost}>
    <ImageBackground style={styles.image} source={{ uri: post.img }}>
      <View style={styles.text}>
        <OpenBoldText style={styles.title}>{post.text}</OpenBoldText>
        <OpenBoldText style={{ ...styles.title, fontSize: 10 }}>
          ({new Date(post.date).toLocaleDateString()})
        </OpenBoldText>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);
