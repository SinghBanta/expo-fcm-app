import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: "https://nextjs-firebase-app-vert.vercel.app" }}
        style={styles.webview}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
