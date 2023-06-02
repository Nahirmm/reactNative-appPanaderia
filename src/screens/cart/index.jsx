import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { CartItem } from '../../components/index';
import { removeFromCart, confirmOrder } from '../../store/actions';

const Cart = () => {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.cart.total);
  const cart = useSelector((state) => state.cart.data);
  const isCartEmpty = cart.length === 0;

  const onRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const onConfirmOrder = () => {
    dispatch(confirmOrder({ cart, total }));
  };

  const renderItem = ({ item }) => <CartItem item={item} onRemove={onRemove} />;

  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.flatList}
      />
      <View style={styles.footerContainer}>
        <TouchableOpacity
          disabled={isCartEmpty}
          style={isCartEmpty ? styles.buttonDisabled : styles.buttonConfirm}
          onPress={onConfirmOrder}>
          <Text style={styles.textButtonConfirm}>Confirmar</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.textTotal}>Total a pagar: ${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
