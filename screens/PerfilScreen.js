import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function PerfilScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity style={styles.editar_button_style} onPress={() => console.log('Editar perfil')}>
        <Text style={styles.editar_text_style}>Editar</Text>
      </TouchableOpacity>

      <View style={styles.fotoContainer}></View>

      <Image
        source={require('../assets/camarera_perfil.jpg')}
        style={styles.imagen}
      />

      <View style={styles.card}>
        <Text style={styles.title}>Marta Martinez</Text>

        <View style={[styles.internalCard, {  marginLeft: '2%' }]}>
          <Ionicons name="mail-unread-outline" size={24} color="#FF5733" />
        </View>

        <View style={styles.internalCard}>
          <Ionicons name="person-outline" size={24} color="#FF5733" />
        </View>

        <View style={[styles.internalCard, {  marginRight: '2%' }]}>
          <Ionicons name="briefcase-outline" size={24} color="#FF5733" />
        </View>
      </View>

      <View style={styles.touchableCard}>
        <Text style={styles.touchableCardTitules}>Buscar Trabajo</Text>
        <Ionicons name="search" size={24} color="#FF5733" />
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
  fotoContainer: {
    position: 'absolute',
    top: '9.4%',
    left: '28.6%',
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  imagen: {
    resizeMode: 'cover',
    width: 150,
    height: 150,
    borderRadius: 75,
    position: 'absolute',
    top: '10%',
    left: '30%',
    opacity: 0.8,
  },
  title: {
    fontFamily: 'monospace',
    position: 'absolute',
    top: '10%',
    left: '0%',
    right: '20%',
    color: '#FF5733',
    fontSize: 16,
    textAlign: 'center',
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '85%',
    height: '20%',
    marginTop: '50%',
    marginHorizontal: 30,
    alignItems: 'center',
    shadowColor: '#000',
    justifyContent: 'space-between',
    flexDirection: 'row',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  internalCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: '10%',
    width: '30%',
    height: '65%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  internalSecondCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '30%',
    height: '65%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  internalthirdCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '30%',
    height: '65%',
    marginRight: '3%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  touchableCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '85%',
    height: 70,
    marginTop: '3%',
    marginHorizontal: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  touchableCardTitules: {
    color: '#FF5733',
    fontSize: 18,
  },
  editar_text_style: {
    position: 'absolute',
    top: '6%',
    left: '80%',
    color: '#FF5733',
    fontSize: 15,
  },
  editar_button_style: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '8%',
    left: '72%',
    width: '20%',
    padding: '3%',
    borderRadius: 30,
    alignSelf: 'center',
  },
});
