import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const ProductItem = ({ item, onSelected, color }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <View style={{ ...styles.container, backgroundColor: color }}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.detail}>Descripción: {item.description}</Text>
          <Text style={styles.detail}>Cantidad: {item.weigth}</Text>
          <Text style={styles.detail}>Precio: {item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
