import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { styles } from './styles';
import { CategoryItem } from '../../components/index';
import { CATEGORIES } from '../../data/categories';

const Categories = ({ navigation }) => {
  const handleSelectedCategory = (item) => {
    navigation.navigate('Products', {
      categoryID: item.id,
      name: item.name,
      color: item.color,
    });
  };

  const renderGridItem = ({ item }) => (
    <CategoryItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elija la categoria</Text>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

export default Categories;
