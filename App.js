import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TelaLogin from './app/telas/TelaLogin';
import TelaPrincipal from './app/telas/TelaPrincipal';
import TelaRegistro from './app/telas/TelaRegistro';
import TelaRecuperacao from './app/telas/TelaRecuperacao';

const Stack= createStackNavigator();

export default function Navegacao() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaLogin" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TelaLogin" component={TelaLogin} />
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
        <Stack.Screen name="TelaRegistro" component={TelaRegistro} />
        <Stack.Screen name="TelaRecuperacao" component={TelaRecuperacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}