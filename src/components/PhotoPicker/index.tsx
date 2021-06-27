import React, { useState } from "react";
import { View, Image, Button, StyleSheet, Alert } from "react-native";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

async function askForPermissions() {
  const { status } = await Permissions.askAsync(
    Permissions.CAMERA,
    Permissions.MEDIA_LIBRARY
  );

  if (status !== "granted") {
    Alert.alert("Ошибка", "Нет разрешения");
    return false;
  }
  return true;
}

const styles = StyleSheet.create({
  root: {
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 10,
  },
});

interface IProps {
  pickUri: (uri: string) => void;
}

export const PhotoPicker = ({ pickUri }: IProps) => {
  const [image, setImage] = useState<ImageInfo>();

  const onAddPhoto = async () => {
    const hasPermission = await askForPermissions();
    if (hasPermission) {
      const img = (await ImagePicker.launchCameraAsync({
        quality: 0.7,
        allowsEditing: false,
        aspect: [16, 9],
      })) as ImageInfo;
      setImage(img);
      pickUri(img.uri);
    }
  };

  return (
    <View style={styles.root}>
      <Button title='Добавить фото' onPress={onAddPhoto} />
      {image && <Image style={styles.image} source={{ uri: image.uri }} />}
    </View>
  );
};
