import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { CategoryItem } from '../../components/index';
import { selectCategory } from '../../store/actions';

const Categories = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);

  const handleSelectedCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products', {
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
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

export default Categories;
