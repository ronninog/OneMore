import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import React, { useState } from 'react';

import { supabase } from '../services/Supabase';


export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmar, setConfirmar] = useState('');
 

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }

    const { error, data } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('Registro fallido:', error.message);
      Alert.alert('Error', error.message);
    } else {
      Alert.alert(
        'Registro exitoso',
        'Revisa tu correo para confirmar la cuenta'
      );
      navigation.navigate('LoginScreen');
    }
  };  



  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Crear cuenta</Text>

      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderRadius: 20, backgroundColor: 'white', marginHorizontal: '15%', marginTop: '80%' }}
        theme={{ roundness: 20 }}
      />

      <TextInput
        mode="outlined"
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={{ borderRadius: 20, backgroundColor: 'white', marginHorizontal: '15%', marginTop: '5%' }}
        theme={{ roundness: 20 }}
      />

      <TextInput
        mode="outlined"
        label="Confirmar Contraseña"
        value={confirmar}
        onChangeText={setConfirmar}
        secureTextEntry={true}
        style={{ borderRadius: 20, backgroundColor: 'white', marginHorizontal: '15%', marginTop: '5%' }}
        theme={{ roundness: 20 }}
      />

      <View style={styles.bloqueBotones}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            if (password !== confirmar) {
              alert('Las contraseñas no coinciden');
              return;
            }
            // Aquí puedes llamar a tu función de registro
            console.log('Registrarse con:', email, password);
          }}
        >
          <Text>Registrarse</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={handleRegister}
        >
          <Text>Volver</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
    paddingTop: 50,
  },

  title: {
    fontFamily: 'monospace',
    position: 'absolute',
    top: '30%',
    left: '20%',
    right: '20%',
    color: '#FF5733',
    fontSize: 36,
    textAlign: 'center',
  },

  bloqueBotones: {
    marginTop: '6%',
  },

  button1: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '67%',
    left: '18%',
    width: '30%',
    backgroundColor: '#FF5733',
    padding: '3%',
    borderRadius: 30,
  },

  button2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '67%',
    left: '53%',
    width: '30%',
    backgroundColor: '#FF5733',
    padding: '3%',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
