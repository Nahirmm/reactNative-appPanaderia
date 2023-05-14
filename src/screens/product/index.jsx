import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

const Product = ({ route }) => {
  const product = route.params;
  console.log(route.params);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.details}>{product.description}</Text>
      <Text style={styles.details}>{product.weigth}</Text>
      <Text style={styles.details}>{product.price}</Text>
    </View>
  );
};

export default Product;
