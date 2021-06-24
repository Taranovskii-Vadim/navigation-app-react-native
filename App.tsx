import React, { useState } from "react";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";

import { AppNavigation } from "./src/navigation";
import { preAppStart } from "./src/preAppStart";
import { store } from "./src/store";

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
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
