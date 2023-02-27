import React from "react";
import { Text, View } from "react-native";
import { REACT_APP_SENTRY_DSN, REACT_APP_BASE_URL, REDIRECT_URI } from "@env";
function Test() {
  return (
    <View>
      <Text>{REACT_APP_SENTRY_DSN}</Text>
      <Text>{REACT_APP_BASE_URL}</Text>
      <Text>{REDIRECT_URI}</Text>
      <Text>test1</Text>
    </View>
  );
}

export default Test;
