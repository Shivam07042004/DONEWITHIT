import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";

function ListItemSeperator(props) {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    backgroundColor: colors.light,
    height: 1,
    width: "100%",
  },
});

export default ListItemSeperator;
