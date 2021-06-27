import React, { useEffect } from "react";
import { View } from "react-native";

import { fetchPosts } from "../store/models/Post/actions";

import { AboutScreen } from "./AboutScreen";

export const ProtectedScreens = () => {
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <AboutScreen />
    </View>
  );
};
