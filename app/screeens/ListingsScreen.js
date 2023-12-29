import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 100,
    image: require("../assets/couch.jpg"),
  },
];
function ListingsScreen(props) {
  return (
    <View style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    paddingTop: 40,
    flex: 1,
  },
});

export default ListingsScreen;
