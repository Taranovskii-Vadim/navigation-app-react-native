import React from "react";
import { View, StyleSheet, Image, Button, Alert } from "react-native";
import { DATA, THEME } from "../../constants";

import { OpenBoldText } from "../../components/ui/OpenBoldText";
import { OpenRegularText } from "../../components/ui/OpenRegularText";

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
  const postId = navigation.getParam("postId");

  const post = DATA.find(item => item.id === postId);

  const onRemoveTodo = () => {
    Alert.alert("Удаление", "Вы уверены?", [
      {
        text: "Отменить",
        style: "cancel",
      },
      {
        text: "Удалить",
        style: "destructive",
        onPress: () => console.log("Удалено"),
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
  return {
    headerTitle: title,
  };
};
