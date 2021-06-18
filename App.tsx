import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { View } from "react-native";

import { ProtectedScreens } from "./src/screens";

import { preAppStart } from "./src/preAppStart";

export default function App() {
  const [isReady, setIsReady] = useState(() => false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={preAppStart}
        onError={e => console.log(e)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <ProtectedScreens />
      <StatusBar style='auto' />
    </View>
  );
}
