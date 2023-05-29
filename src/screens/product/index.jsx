import React from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';

const Product = () => {
  const product = useSelector((state) => state.products.selected);

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
