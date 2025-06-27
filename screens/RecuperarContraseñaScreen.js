import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import { supabase } from '../services/Supabase';


export default function RecoverPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');




const enviarCorreoRecuperacion = async (email) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'https://tudominio.com/cambiar-password', // o tu app si es deep link
  });

  if (error) {
    console.error('Error al enviar el correo:', error.message);
  } else {
    console.log('Correo de recuperación enviado:', data);
  }
};


  const handleResetPassword = () => {
    if (!email.includes('@')) {
      Alert.alert('Error', 'Introduce un email válido.');
      return;
    }

    // Aquí iría la lógica para enviar el email de recuperación con Supabase o el sistema que uses.
    Alert.alert(
      'Correo enviado',
      'Si tu correo está registrado, recibirás un enlace para restablecer tu contraseña.'
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Recuperar contraseña</Text>

      <TextInput
        mode="outlined"
        label="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        style={{ borderRadius: 20, backgroundColor: 'white', marginHorizontal: '15%', marginTop: '80%' }}
        theme={{ roundness: 20 }}
      />

      <View style={styles.bloqueBotones}>
        <TouchableOpacity style={styles.button1} onPress={handleResetPassword}>
          <Text>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={() => navigation.goBack()}>
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
