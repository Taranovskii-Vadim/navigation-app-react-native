import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Image, Button, Alert } from "react-native";

import { THEME } from "../../constants";
import { AppIcon } from "../../components/ui/AppIcon";
import { OpenBoldText } from "../../components/ui/OpenBoldText";
import { OpenRegularText } from "../../components/ui/OpenRegularText";

import { selectPosts } from "../../store/models/Post/selectors";
import { deletePost, toggleBooked } from "../../store/models/Post/actions";
import { useEffect } from "react";
import { useCallback } from "react";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: THEME.HORIZONTAL_PADD,
  },
  image: {
    width: "100%",
    height: 200,
  },
});

interface IProps {
  navigation: any;
}

export const PostScreen = ({ navigation }: IProps): JSX.Element => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const postId = navigation.getParam("postId");

  const post = posts.find(item => item.id === postId);

  const onChangeFavorite = useCallback(() => {
    dispatch(toggleBooked(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    const booked = post ? post.booked : false;
    navigation.setParams({ booked });
  }, [post]);

  useEffect(() => {
    navigation.setParams({ onChangeFavorite });
  }, [onChangeFavorite]);

  const onRemoveTodo = () => {
    Alert.alert("Удаление", "Вы уверены?", [
      {
        text: "Отменить",
        style: "cancel",
      },
      {
        text: "Удалить",
        style: "destructive",
        onPress: () => {
          navigation.navigate("Main");
          dispatch(deletePost(post ? post.id : ""));
        },
      },
    ]);
  };

  return (
    <View style={styles.root}>
      {post ? (
        <>
          <Image style={styles.image} source={{ uri: post.img }} />
          <View>
            <OpenRegularText>
              {`Дата загрузки поста: ${new Date(
                post.date
              ).toLocaleDateString()}`}
            </OpenRegularText>
          </View>
          <Button
            title='Удалить'
            color={THEME.DANGER_COLOR}
            onPress={onRemoveTodo}
          />
        </>
      ) : (
        <OpenBoldText style={{ color: THEME.DANGER_COLOR }}>
          Пост не найден
        </OpenBoldText>
      )}
    </View>
  );
};

PostScreen.navigationOptions = ({ navigation }: IProps) => {
  const title = navigation.getParam("title");
  const booked = navigation.getParam("booked");
  const onChangeFavorite = navigation.getParam("onChangeFavorite");
  return {
    headerTitle: title,
    headerRight: () => (
      <AppIcon onPress={onChangeFavorite}>
        <Ionicons
          name={booked ? "star-outline" : "star"}
          size={25}
          style={{ marginRight: 15 }}
          color={THEME.MAIN_COLOR}
        />
      </AppIcon>
    ),
  };
};
