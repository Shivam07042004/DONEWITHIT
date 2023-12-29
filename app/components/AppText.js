import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Platform } from "react-native";
import defaultStyles from "../config/styles";

const AppText = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
