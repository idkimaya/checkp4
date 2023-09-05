import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './frontend/screens/HomeScreen';
import ProductScreen from './frontend/screens/ProductScreen';
import CartScreen from './frontend/screens/CartScreen';

type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

type BottomTabParamList = {
  Home: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown: false}}  component={HomeScreen} />
    </Stack.Navigator>
  );
};

const ProductStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Product" options={{headerShown: false}}  component={ProductScreen} />
    </Stack.Navigator>
  );
};

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" options={{headerShown: false}}  component={CartScreen} />
    </Stack.Navigator>
  );
};

const NavigationApp = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          marginBottom: 20,
          height: 75,
          alignItems: 'center',
          
          borderRadius: 100,
          marginHorizontal: 20,
          backgroundColor: "#d4a574",

        },})}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Product" component={ProductStack} />
        <Tab.Screen name="Cart" component={CartStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationApp;
