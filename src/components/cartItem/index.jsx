import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { theme } from '../../constants';

const CartItem = ({ item, onRemove }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleHeader}>{item.name}</Text>
      </View>
      <View style={styles.containConteiner}>
        <View style={styles.detailsContainer}>
          <Text style={styles.quantity}>Cantidad: {item.quantity}</Text>
          <Text style={styles.price}>Precio: ${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onRemove(item.id)}>
          <MaterialIcons name="remove-shopping-cart" size={24} color={theme.colors.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
