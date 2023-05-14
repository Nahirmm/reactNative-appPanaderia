import React from "react";
import { View, FlatList } from "react-native";

import { styles } from "./styles";
import { ProductItem } from "../../components/index";
import { PRODUCTS } from "../../data/products";

const Products = ({ navigation, route }) => {
  const products = PRODUCTS.filter(
    (product) => product.category === route.params.categoryID
  );

  const handleSelected = (item) => {
    navigation.navigate("Product", {
      productID: item.id,
      name: item.name,
    });
  };

  const renderProductItem = ({ item }) => (
    <ProductItem item={item} onSelected={handleSelected} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
      />
    </View>
  );
};

export default Products;
