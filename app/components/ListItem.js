import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ListItem({
  image,
  title,
  subTitle,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title} numberOfLines={1}>
                {title}
              </AppText>
              {subTitle && (
                <AppText style={styles.subTitle} numberOfLines={2}>
                  {subTitle}
                </AppText>
              )}
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              color={colors.medium}
              size={25}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  detailsContainer: {
    marginLeft: 10,
    flex: 1,
    justifyContent: "center",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
    fontSize: 20,
  },
  title: {
    fontWeight: "500",
    fontSize: 20,
  },
});

export default ListItem;
