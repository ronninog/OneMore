import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import React, { useState, useEffect } from 'react';



export default function LoginScreen({ navigation }) {

  const [text, setText] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (

    <SafeAreaView style={styles.container}>

   
    
      <Text style={styles.title}>OneMore</Text>

     <TextInput
      mode="outlined"
      label="Email"
      style={{ borderRadius: 20, backgroundColor: 'white', marginHorizontal: '15%', marginTop: '80%' }}
      theme={{ roundness: 20 }} // Esto aplica borderRadius para react-native-paper
      />

         <TextInput
      mode="outlined"
      label="Contraseña"
      secureTextEntry={true}
      style={{ borderRadius: 20, backgroundColor: 'white', marginHorizontal: '15%', marginTop: '5%' }}
      theme={{ roundness: 20 }} // Esto aplica borderRadius para react-native-paper
      />

      <View style={styles.bloqueBotones}> 
      
      <TouchableOpacity style={styles.button0} onPress={() => console.log('Recuperar contraseña')}>
        <View>
          <Text style ={styles.recContraseña}>Recuperar contraseña</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.button1} onPress={() => navigation.navigate('PerfilScreen')} >
        <View>
          <Text>Iniciar Sesión</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={() => console.log('Registrarse')}>
        <View>
          <Text>Registrarse</Text>
        </View>
      </TouchableOpacity>

      </View>
      

      
      <StatusBar style="auto" />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    position: 'relative', // Necesario para que position: 'absolute' funcione bien dentro
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
    fontSize: 44,
    textAlign: 'center',
  },

  correo: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: '0%',
    marginHorizontal: '15%',
  },

   contraseña: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: '5%',
    borderRadius: 0,
    borderColor: '#ccc',
    padding: '0%',
    marginHorizontal: '15%',
  },
  bloqueBotones: {
        marginTop: '6%',

  },


  button0: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '61%', // Puedes ajustar esto como gustes: '50%', '60%', etc.
    left: '50%',
    
  },

  button1: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '64%', // Puedes ajustar esto como gustes: '50%', '60%', etc.
    left: '18%',
    width: '30%',
    backgroundColor: '#FF5733',
    padding: '3%',
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
  },

   button2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '64%', // Puedes ajustar esto como gustes: '50%', '60%', etc.
    left: '53%',
    width: '30%',
    backgroundColor: '#FF5733',
    padding: '3%',
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Para Android
  },

  recContraseña: {
    color: '#FF5733',
    fontSize: 10,
    textDecorationLine: 'underline',
    marginTop: '22%',
    marginLeft: '8%',
  },
});
