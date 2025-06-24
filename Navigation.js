// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import PerfilScreen from './screens/PerfilScreen';
import EditarPerfilScreen from './screens/EditarPerfilScreen';
import MensajesScreen from './screens/MensajesScreen';
import BuscarTrabajoScreen from './screens/BuscarTrabajos';
import TrabajosRecientes from './screens/TrabajosRealizados'


const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>

        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
        <Stack.Screen name="EditarPerfilScreen" component={EditarPerfilScreen}/>
        <Stack.Screen name="Mensajes" component={MensajesScreen} />
        <Stack.Screen name="TrabajosRealizados" component={TrabajosRecientes} />
        <Stack.Screen name="BuscarTrabajo" component={BuscarTrabajoScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
