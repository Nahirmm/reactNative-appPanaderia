import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { ProductItem } from '../../components/index';
import { filterProducts, selectProduct } from '../../store/actions';

const Products = ({ navigation }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories.selected);
  const filteredProducts = useSelector((state) => state.products.filteredProducts);

  const handleSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate('Product', {
      name: item.name,
    });
  };

  useEffect(() => {
    dispatch(filterProducts(category.id));
  }, []);

  const renderProductItem = ({ item }) => (
    <ProductItem item={item} onSelected={handleSelected} color={category.color} />
  );

  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredProducts}
        keyExtractor={keyExtractor}
        renderItem={renderProductItem}
      />
    </View>
  );
};

export default Products;
