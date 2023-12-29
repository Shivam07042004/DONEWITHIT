// Screen.js
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    // marginTop: 10,
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
