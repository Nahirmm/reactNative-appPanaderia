import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { CartItem } from '../../components/index';
import { CART } from '../../data/cart';

const Cart = () => {
  const TOTAL = 2000;
  const onRemove = (id) => {
    console.log(id);
  };

  const renderItem = ({ item }) => <CartItem item={item} onRemove={onRemove} />;

  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList
        data={CART}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.flatList}
      />
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={() => null}>
          <Text style={styles.textButtonConfirm}>Confirmar</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.textTotal}>Total a pagar: ${TOTAL}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
