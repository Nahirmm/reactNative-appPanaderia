import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import { theme } from '../../constants';
import CartNavigator from '../cart/index';
import OrdersNavigator from '../orders/index';
import ShopNavigator from '../shop/index';
const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  const cart = useSelector((state) => state.cart.data);

  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontFamily: 'Playfair-Italic-Medium', fontSize: 15 },
        tabBarActiveTintColor: theme.colors.grey,
        tabBarInactiveTintColor: theme.colors.black,
        tabBarIconStyle: {
          fontSize: 22,
        },
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarLabel: 'Ordenes',
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="list-alt" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: 'Carrito',
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),
          tabBarBadge: cart.length,
          tabBarBadgeStyle: {
            backgroundColor: theme.colors.secondary,
            fontFamily: theme.fontsFamily.buttons,
            fontSize: 14,
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
