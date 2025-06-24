import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';


export default function BuscarTrabajos({ navigation }) {
 const [busqueda, setBusqueda] = useState('');
  const [filtroActivo, setFiltroActivo] = useState('todos');

  const trabajosDisponibles = [
    {
      id: 1,
      titulo: "Camarera para Restaurante Italiano",
      empresa: "Bella Italia",
      ubicacion: "Malasaña",
      salario: "€13-15/hora",
      tipo: "Parcial",
      fecha: "26 Jun 2025",
      descripcion: "Buscamos camarera con experiencia para restaurante italiano...",
      icono: "restaurant",
      urgente: true
    },
    {
      id: 2,
      titulo: "Servicio de Bar - Evento Nocturno",
      empresa: "Night Events",
      ubicacion: "Chueca",
      salario: "€18-22/hora",
      tipo: "Temporal",
      fecha: "29 Jun 2025",
      descripcion: "Evento exclusivo en rooftop, experiencia en coctelería valorada...",
      icono: "wine",
      urgente: false
    },
    {
      id: 3,
      titulo: "Camarera de Desayunos",
      empresa: "Café Morning",
      ubicacion: "Sol",
      salario: "€11-13/hora",
      tipo: "Parcial",
      fecha: "23 Jun 2025",
      descripcion: "Turno de mañana, ambiente familiar y acogedor...",
      icono: "cafe",
      urgente: false
    },
    {
      id: 4,
      titulo: "Personal de Sala - Hotel Boutique",
      empresa: "Hotel Luxury",
      ubicacion: "Salamanca",
      salario: "€16-20/hora",
      tipo: "Completo",
      fecha: "30 Jun 2025",
      descripcion: "Hotel 5 estrellas busca personal cualificado...",
      icono: "business",
      urgente: true
    }
  ];

  const filtros = [
    { id: 'todos', nombre: 'Todos', icono: 'apps' },
    { id: 'parcial', nombre: 'Parcial', icono: 'time' },
    { id: 'completo', nombre: 'Completo', icono: 'briefcase' },
    { id: 'temporal', nombre: 'Temporal', icono: 'calendar' }
  ];

  const renderTrabajo = ({ item }) => (
    <TouchableOpacity style={styles.trabajoDisponibleCard}>
      {item.urgente && (
        <View style={styles.urgenteTag}>
          <Text style={styles.urgenteTexto}>URGENTE</Text>
        </View>
      )}
      
      <View style={styles.trabajoHeader}>
        <View style={styles.iconBackground}>
          <Ionicons name={item.icono} size={24} color="#FF5733" />
        </View>
        <View style={styles.trabajoInfoBuscar}>
          <Text style={styles.tituloTrabajo}>{item.titulo}</Text>
          <Text style={styles.empresaTrabajo}>{item.empresa}</Text>
          <View style={styles.trabajoMetadata}>
            <Ionicons name="location" size={14} color="#979797" />
            <Text style={styles.ubicacionTrabajo}>{item.ubicacion}</Text>
            <Text style={styles.separador}>•</Text>
            <Text style={styles.tipoTrabajo}>{item.tipo}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.descripcionTrabajo} numberOfLines={2}>
        {item.descripcion}
      </Text>

      <View style={styles.trabajoFooter}>
        <Text style={styles.salarioTrabajo}>{item.salario}</Text>
        <Text style={styles.fechaTrabajo}>{item.fecha}</Text>
      </View>

      <TouchableOpacity style={styles.aplicarButton}>
        <Text style={styles.aplicarTexto}>Aplicar</Text>
        <Ionicons name="arrow-forward" size={16} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const renderFiltro = ({ item }) => (
    <TouchableOpacity
      style={[styles.filtroChip, filtroActivo === item.id && styles.filtroChipActivo]}
      onPress={() => setFiltroActivo(item.id)}
    >
      <Ionicons 
        name={item.icono} 
        size={16} 
        color={filtroActivo === item.id ? '#fff' : '#FF5733'} 
      />
      <Text style={[styles.filtroTexto, filtroActivo === item.id && styles.filtroTextoActivo]}>
        {item.nombre}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#FF5733" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Buscar Trabajo</Text>
        <TouchableOpacity>
          <Ionicons name="notifications" size={24} color="#FF5733" />
        </TouchableOpacity>
      </View>

      {/* Barra de búsqueda */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#979797" />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar trabajos..."
            value={busqueda}
            onChangeText={setBusqueda}
            placeholderTextColor="#979797"
          />
        </View>
      </View>

      {/* Filtros */}
      <FlatList
        data={filtros}
        renderItem={renderFiltro}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filtrosList}
      />

      {/* Lista de trabajos */}
      <FlatList
        data={trabajosDisponibles}
        renderItem={renderTrabajo}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.trabajosDisponiblesList}
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
