import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import { PRODUCTS } from '../../data/products';

const Product = ({ route }) => {
  const { productID } = route.params;

  const product = PRODUCTS.find((product) => product.id === productID);
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.details}>{product.description}</Text>
      <Text style={styles.details}>{product.weigth}</Text>
      <Text style={styles.details}>{product.price}</Text>
    </View>
  );
};

export default Product;
