// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native'; // ✅ Esto es lo correcto
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import PerfilScreen from './screens/PerfilScreen';
import EditarPerfilScreen from './screens/EditarPerfilScreen';
import MensajesScreen from './screens/MensajesScreen';
import BuscarTrabajoScreen from './screens/BuscarTrabajos';
import TrabajosRecientes from './screens/TrabajosRealizados'
import ChatScreen from './screens/ChatScreen';
import RegisterScreen from './screens/RegisterScreen';
import RecuperarContraseñaScreen from './screens/RecuperarContraseñaScreen'
import OfertaTrabajo from './screens/OfertaDeTrabajo';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
        <Stack.Screen name="EditarPerfilScreen" component={EditarPerfilScreen} />
        <Stack.Screen name="Mensajes" component={MensajesScreen} />
        <Stack.Screen name="TrabajosRealizados" component={TrabajosRecientes} />
        <Stack.Screen name="BuscarTrabajo" component={BuscarTrabajoScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="RecuperarContraseñaScreen" component={RecuperarContraseñaScreen} />
        <Stack.Screen name="OfertaTrabajo" component={OfertaTrabajo} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}
