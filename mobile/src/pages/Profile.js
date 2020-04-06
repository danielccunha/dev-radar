import React from "react";
import { WebView } from "react-native-webview";

export default ({ navigation }) => {
  const githubUsername = navigation.getParam("github_username");
  return (
    <WebView
      style={{ flex: 1 }}
      source={{ uri: `https://www.github.com/${githubUsername}` }}
    />
  );
};
