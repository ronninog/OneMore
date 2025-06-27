import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function MensajesScreen({ navigation }) {
  const mensajes = [
    {
      id: 1,
      nombre: "Restaurante El Galo",
      mensaje: "¡Felicidades! Has sido seleccionada para el trabajo de camarera.",
      tiempo: "2h",
      leido: false,
      avatar: "restaurant"
    },
    {
      id: 2,
      nombre: "Hotel Las Chairas",
      mensaje: "Gracias por tu excelente trabajo. Te contactaremos pronto.",
      tiempo: "1d",
      leido: true,
      avatar: "business"
    },
    {
      id: 3,
      nombre: "Café Central",
      mensaje: "¿Estarías disponible para trabajar el fin de semana?",
      tiempo: "2d",
      leido: false,
      avatar: "cafe"
    },
    {
      id: 4,
      nombre: "Bar La Esquina",
      mensaje: "Hemos revisado tu perfil y nos interesa contactarte.",
      tiempo: "3d",
      leido: true,
      avatar: "wine"
    }
  ];

  const renderMensaje = ({ item }) => (
   <TouchableOpacity
  style={[styles.mensajeCard, !item.leido && styles.mensajeNoLeido]}
  onPress={() => navigation.navigate('ChatScreen', { nombre: item.nombre })}>


      <View style={styles.avatarContainer}>
        <View style={styles.iconBackground}>
          <Ionicons name={item.avatar} size={24} color="#FF5733" />
        </View>
      </View>
      
      <View style={styles.mensajeContent}>
        <View style={styles.mensajeHeader}>
          <Text style={styles.nombreEmpresa}>{item.nombre}</Text>
          <Text style={styles.tiempoMensaje}>{item.tiempo}</Text>
        </View>
        <Text style={styles.textoMensaje} numberOfLines={2}>
          {item.mensaje}
        </Text>
      </View>
      
      {!item.leido && <View style={styles.puntoNoLeido} />}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#FF5733" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mensajes</Text>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="#FF5733" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={mensajes}
        renderItem={renderMensaje}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.mensajesList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingBottom: 40,
  },

  // Header común
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },

  // Estilos del perfil
  editar_button_style: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  fotoContainer: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 10,
    marginBottom: 15,
  },
  imagen: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  subtitule: {
    fontSize: 16,
    color: '#979797',
    marginTop: 5,
  },
  starts: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  score: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  val: {
    color: '#979797',
    fontSize: 14,
    marginLeft: 5,
  },

  // Fila de navegación
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginBottom: 25,
  },
  internalCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    width: '30%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
    position: 'relative',
  },
  cardLabel: {
    color: '#666',
    marginTop: 10,
    fontSize: 12,
    fontWeight: '500',
  },
  notificacion: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FF5733',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 20,
    alignItems: 'center',
  },
  numeroNotificacion: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },

  // Card de estadísticas
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '90%',
    paddingVertical: 20,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  estadisticasRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreStadisticas: {
    color: '#FF5733',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  valoresEstadisticas: {
    color: '#666',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 16,
  },
  verticalLine: {
    width: 1,
    height: 40,
    backgroundColor: '#e0e0e0',
  },

  // Botón principal
  touchableCard: {
    backgroundColor: '#FF5733',
    borderRadius: 16,
    width: '90%',
    height: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    shadowColor: '#FF5733',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
    marginBottom: 30,
  },
  touchableCardTitules: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 15,
  },

  // Título sección
  tituloTrbRec: {
    alignSelf: 'flex-start',
    marginLeft: '5%',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },

  // Cards de trabajos recientes
  touchableCardRecent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    width: '90%',
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  iconoRecent: {
    marginRight: 15,
  },
  iconBackground: {
    backgroundColor: '#ffe3dd',
    borderRadius: 12,
    padding: 12,
  },
  rowRecent: {
    flex: 1,
  },
  tituloTrabajoReciente: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  fechaReciente: {
    color: '#979797',
    fontSize: 13,
    marginBottom: 8,
  },
  eurosReciente: {
    color: '#FF5733',
    fontSize: 14,
    fontWeight: 'bold',
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  completadoReciente: {
    color: '#28a745',
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: '#d4edda',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  // ESTILOS MENSAJES
  mensajesList: {
    padding: 20,
  },
  mensajeCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  mensajeNoLeido: {
    borderLeftWidth: 4,
    borderLeftColor: '#FF5733',
  },
  avatarContainer: {
    marginRight: 15,
  },
  mensajeContent: {
    flex: 1,
  },
  mensajeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  nombreEmpresa: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  tiempoMensaje: {
    fontSize: 12,
    color: '#979797',
  },
  textoMensaje: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  puntoNoLeido: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF5733',
    marginLeft: 10,
  },});