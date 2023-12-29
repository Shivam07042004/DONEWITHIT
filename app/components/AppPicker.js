import React, { useState } from "react";
import {
  Platform,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({
  icon,
  items,
  numberOfColumns = 1,
  onSelectItem,
  placeholder,
  PickerItemComponent = PickerItem,
  selectedItem,
  width = "100%",
  ...otherProps
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Screen>
        <Modal visible={modalVisible} animationType="slide">
          <Button title="close" onPress={() => setModalVisible(false)} />
          <View>
            <FlatList
              data={items}
              keyExtractor={(item) => item.value.toString()}
              numColumns={3}
              renderItem={({ item }) => (
                <PickerItemComponent
                  item={item}
                  label={item.label}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectItem(item);
                  }}
                />
              )}
            />
          </View>
        </Modal>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginTop: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
