import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import i18n from "./localization/i18n";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{i18n.t("greeting")}</Text>
      {/* <Text>{i18n.t("other_text")}</Text>
      <Text>{i18n.t("nested").nested_1}</Text>
      <Text>{i18n.t("nested").nested_2}</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
