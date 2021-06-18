import React, { useState } from "react";
import AppLoading from "expo-app-loading";

import { AppNavigation } from "./src/navigation";
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

  return <AppNavigation />;
}
