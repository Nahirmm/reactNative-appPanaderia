import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';

import { theme } from '../../constants';
import { Categories, Products, Product, Home } from '../../screens';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? theme.colors.primary : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'black' : theme.colors.primary,
        headerTitleStyle: {
          fontFamily: theme.fontsFamily.header,
        },
      }}>
      <Stack.Screen name="Home" component={Home} options={{ title: 'Panadería Argentina' }} />
      <Stack.Screen name="Categories" component={Categories} options={{ title: 'Categorias' }} />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: { backgroundColor: route.params.color },
        })}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
