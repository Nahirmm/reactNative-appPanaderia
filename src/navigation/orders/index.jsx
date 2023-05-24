import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';

import { theme } from '../../constants';
import { Orders } from '../../screens';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? theme.colors.primary : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'black' : theme.colors.primary,
        headerTitleStyle: {
          fontFamily: theme.fontsFamily.header,
        },
      }}>
      <Stack.Screen name="Orders" component={Orders} options={{ title: 'Ordenes de compra' }} />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
