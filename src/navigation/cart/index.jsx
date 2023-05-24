import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';

import { theme } from '../../constants';
import { Cart } from '../../screens';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? theme.colors.primary : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'black' : theme.colors.primary,
        headerTitleStyle: {
          fontFamily: theme.fontsFamily.header,
        },
      }}>
      <Stack.Screen name="Cart" component={Cart} options={{ title: 'Carrito de compra' }} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
