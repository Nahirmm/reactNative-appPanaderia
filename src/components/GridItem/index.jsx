import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const GridItem = ({ item, onSelected }) => {
  return (
    <View style={styles.containerGridItem}>
      <TouchableOpacity
        style={{ ...styles.container, backgroundColor: item.color }}
        onPress={() => onSelected(item)}
      >
        <View>
          <Text style={styles.titleButton}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GridItem;
