import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { theme } from '../../constants';
import { addToCart } from '../../store/actions';

const Product = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.details}>{product.description}</Text>
      <Text style={styles.details}>{product.weigth}</Text>
      <Text style={styles.details}>{product.price}</Text>
      <Button title="Agregar al carrito" onPress={onAddToCart} color={theme.colors.primary} />
    </View>
  );
};

export default Product;
