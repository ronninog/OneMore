import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
 

export default function PerfilScreen({ navigation }) {

 const [nombre, setNombre] = useState('');
 const [profesion, setProfesion] = useState('');




 useFocusEffect(
    useCallback(() => {
    const cargarNombre = async () => {
      try {
        const valor = await AsyncStorage.getItem('perfilUsuario');
        if (valor !== null) {
        const perfil =  JSON.parse(valor)
        setNombre(perfil.nombre + perfil.apellidos)
        setProfesion(perfil.profesion)
        }
      } catch (e) {
        console.log('Error leyendo nombre:', e);
      }
    };

    cargarNombre();
  }, [])
  );



  


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Botón editar */}
        <TouchableOpacity style={styles.editar_button_style}>
          <Ionicons name="settings-outline" size={24} color="#FF5733"  padding="5" />
        </TouchableOpacity>

        {/* Foto y nombre */}
        <View style={styles.profileHeader}>
          <TouchableOpacity style={styles.fotoContainer}>
            <Image
              source={require('../assets/camarera_perfil.jpg')}
              style={styles.imagen}
            />
          </TouchableOpacity>

          <Text style={styles.title}>{nombre || 'Añade tus nombre'}</Text>
          <Text style={styles.subtitule}>{profesion || 'añade tu profesion'}</Text>

          <View style={styles.starts}>
            {[...Array(5)].map((_, index) => (
              <Ionicons
                key={index}
                name="star"
                size={16}
                color="#FFD700"
                style={{ marginRight: 2 }}
              />
            ))}
            <Text style={styles.score}>4.9</Text>
            <Text style={styles.val}> (123 valoraciones)</Text>
          </View>
        </View>

        {/* Fila de tarjetas */}
        <View style={styles.row}>
          <TouchableOpacity style={[styles.internalCard]} onPress={() => navigation.navigate('Mensajes')}>
            <Ionicons name="mail-unread-outline" size={24} color="#FF5733" />
            <View style={styles.notificacion}>
              <Text style={styles.numeroNotificacion}>3</Text>
            </View>
            <Text style={styles.cardLabel}>Mensajes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.internalCard} onPress={() => navigation.navigate('EditarPerfilScreen')}>
            <Ionicons name="person-outline" size={24} color="#FF5733" />
            <Text style={styles.cardLabel}>Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.internalCard} onPress={() => navigation.navigate('TrabajosRealizados')}>
            <Ionicons name="briefcase-outline" size={24} color="#FF5733" />
             <View style={styles.notificacion}>
              <Text style={styles.numeroNotificacion}>5</Text>
            </View>
            <Text style={styles.cardLabel}>Trabajos</Text>
          </TouchableOpacity>
        </View>

        {/* Card informativa */}
        <View style={styles.card}>



          <View style={styles.row}>

            <View style={styles.estadisticasRow}>

              <Text style={styles.scoreStadisticas}>50</Text>
              <Text style={styles.valoresEstadisticas}>Trabajos realizados</Text>
            </View>

            <View style={styles.verticalLine} />
            <Text style={{ color: '#979797' }}></Text>


            <View style={styles.estadisticasRow}>
              <Text style={styles.scoreStadisticas}>98%</Text>
              <Text style={styles.valoresEstadisticas}>Tasa de finalización</Text>
            </View>

            <View style={styles.verticalLine} />
            <Text style={{ color: '#979797' }}></Text>

            <View style={styles.estadisticasRow}>
              <Text style={styles.scoreStadisticas}>3</Text>
              <Text style={styles.valoresEstadisticas}>Trabajos activos</Text>
            </View>

          </View>

        </View>


        <TouchableOpacity style={styles.touchableCard} onPress={() => navigation.navigate('BuscarTrabajo')}>
          <Ionicons name="search" size={24} color="#fff" />
          <Text style={styles.touchableCardTitules}>Buscar Trabajo Disponible</Text>
          <Ionicons name="chevron-forward" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.tituloTrbRec}>Trabajos Recientes</Text>

        <View style={styles.touchableCardRecent}>
          <View style={styles.iconoRecent}>
            <View borderRadius={8} backgroundColor="#ffe3dd" padding="5">
              <Ionicons name="restaurant" size={24} color="#FF5733" backgroundColor="#ffe3dd" padding="5" />
            </View>

          </View>

          <View style={styles.rowRecent}>
            <Text style={styles.tituloTrabajoReciente}>Camarera Restaurante o Galo</Text>
            <Text style={styles.fechaReciente}>15 jun 2025 - 8 horas</Text>
            <Text style={styles.eurosReciente}>Euros 12/hora</Text>
          </View>

          <View style={styles.rowRecent}>
            <Text style={styles.completadoReciente}>Completado</Text>
          </View>
        </View>

        <View style={styles.touchableCardRecent}>
          <View style={styles.iconoRecent}>
            <View borderRadius={8} backgroundColor="#ffe3dd" padding="5">
              <Ionicons name="wine" size={24} color="#FF5733" backgroundColor="#ffe3dd" padding="5" />
            </View>

          </View>

          <View style={styles.rowRecent}>
            <Text style={styles.tituloTrabajoReciente}>Hotel restaurante as Chairas</Text>
            <Text style={styles.fechaReciente}>15 jun 2025 - 8 horas</Text>
            <Text style={styles.eurosReciente}>Euros 10/hora</Text>
          </View>

          <View style={styles.rowRecent}>
            <Text style={styles.completadoReciente}>Completado</Text>
          </View>
        </View>



            <View style={styles.verticalRow}>


            </View>




        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}


// Contenedor general
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingBottom: 40,
  },

  // Botón de editar
  editar_button_style: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 20,
    
  },
  editar_text_style: {
    color: '#FF5733',
    fontSize: 15,
  },

  // Encabezado de perfil (imagen, nombre, subtítulo, estrellas)
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  fotoContainer: {
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
    marginBottom: 10,
  },
  imagen: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'cover',
    opacity: 0.9,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  subtitule: {
    fontSize: 15,
    color: '#979797',
    marginTop: 5,
  },
  starts: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  score: {
    color: '#979797',
    fontSize: 16,
    marginLeft: 0,
  },
  val: {
    color: '#979797',
    fontSize: 12,
    alignContent: 'center',
    marginLeft: 5,
  },

  // Fila de botones de perfil
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: 1,
    marginBottom: 20,

  },
  internalCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '30%',
    marginLeft: 5,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  cardLabel: {
    color: '#979797',
    marginTop: 8,
    fontSize: 13,
  },
  notificacion: {
    position: 'absolute',
    top: -3,
    right: -3,
    backgroundColor: '#FF5733',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 3,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  numeroNotificacion: {
    color: '#fff',    
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Card de estadísticas personales
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '90%',
    height: 90,
    marginBottom: 20,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  estadisticasRow: {
    marginTop: 15,
    width: '30%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreStadisticas: {
    color: '#FF5733',
    fontSize: 17,
    marginBottom: 2,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  valoresEstadisticas: {
    color: '#979797',
    fontSize: 12,
    textAlign: 'center',
  },
  verticalLine: {
    width: 1,
    marginTop: 10,
    height: '60%',
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },

  // Botón "Buscar trabajo disponible"
  touchableCard: {
    backgroundColor: '#FF5733',
    borderRadius: 20,
    width: '90%',
    height: 70,
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
    color: '#fff',
    fontSize: 15,
    textAlign: 'left',
    fontWeight: 'bold',
    marginLeft: 30,
    flex: 1,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  tituloTrbRec: {
    marginRight: 180,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,

  },

  // Card de trabajos recientes
  touchableCardRecent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '95%',
    height: 105,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },
  tituleCardRecent: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
    marginRight: 50,
  },
  leftSection: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  centerSection: {
    flex: 0.6,
    justifyContent: 'center',
  },

  rightSection: {
    flex: 0.2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  fechaCardRecent: {
    fontSize: 12,
    color: '#979797',
  },

  estadoCardRecent: {
    fontSize: 13,
    color: '#28a745',
    fontWeight: 'bold',
  },
  tituloTrabajoReciente: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 2,

  },
  fechaReciente: {
    color: '#979797',
    fontSize: 10,
    marginBottom: 5,
    marginRight: 54,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconoRecent: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  completadoReciente: {
    color: '#28a745',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 15,
    backgroundColor: '#d4edda',
    padding: 3,
    borderRadius: 20,
    borderColor: '#28a745',
    marginRight: 10,
  },
  rowRecent: {
    marginTop: 15,
    width: '50%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eurosReciente: {
    color: '#FF5733',
    fontSize: 12,
    marginBottom: 20,
    marginRight: 78,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  

});
