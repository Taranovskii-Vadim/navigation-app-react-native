import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { PhotoPicker } from "../../components/PhotoPicker";

import { AppIcon } from "../../components/ui/AppIcon";
import { THEME } from "../../constants";

import { addPost } from "../../store/models/Post/actions";
import { useRef } from "react";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: THEME.HORIZONTAL_PADD,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    padding: 5,
    borderColor: THEME.MAIN_COLOR,
    borderRadius: 5,
    marginBottom: 15,
  },
  // image: {
  //   width: "100%",
  //   height: 200,
  //   marginBottom: 15,
  // },
});

interface IProps {
  navigation: any;
}

const TEMP =
  "https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg";

export const CreateScreen = ({ navigation }: IProps) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(() => "");
  const uriRef = useRef<string>();

  const onHandleAddPost = () => {
    dispatch(addPost(title, uriRef.current || TEMP));
    navigation.navigate("Main");
  };

  const pickUri = (uri: string): void => {
    uriRef.current = uri;
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.root}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder='Введите значение'
        />
        <PhotoPicker pickUri={pickUri} />
        <Button title='Добавить' onPress={onHandleAddPost} disabled={!title} />
      </View>
    </TouchableWithoutFeedback>
  );
};

CreateScreen.navigationOptions = ({ navigation }: any) => {
  return {
    headerTitle: "Добавить пост",
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
