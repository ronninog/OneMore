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
    
    <TouchableOpacity
      style={styles.trabajoDisponibleCard}
      onPress={() => {
        // Aquí va lo que quieras que ocurra al tocar
        console.log('Trabajo disponible presionado');
        navigation.navigate('OfertaTrabajo'); // si estás usando React Navigation
      }}
    >
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

  // Header mejorado
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },

  // Barra de búsqueda mejorada
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },

  // Filtros mejorados
  filtrosList: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  filtroChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#FF5733',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  filtroChipActivo: {
    backgroundColor: '#FF5733',
    borderColor: '#FF5733',
    shadowColor: '#FF5733',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  filtroTexto: {
    padding:10,
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#FF5733',
    
  },
  filtroTextoActivo: {
    color: '#fff',
  },

  // Cards de trabajo mejorados
  trabajosDisponiblesList: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  trabajoDisponibleCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    position: 'relative',
  },
  urgenteTag: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#FF5733',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    shadowColor: '#FF5733',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  urgenteTexto: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },

  // Header del trabajo
  trabajoHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  iconBackground: {
    backgroundColor: '#ffe3dd',
    borderRadius: 16,
    padding: 12,
    marginRight: 15,
    shadowColor: '#FF5733',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  trabajoInfoBuscar: {
    flex: 1,
    paddingRight: 40,
  },
  tituloTrabajo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    lineHeight: 22,
  },
  empresaTrabajo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    fontWeight: '500',
  },
  trabajoMetadata: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ubicacionTrabajo: {
    fontSize: 14,
    color: '#979797',
    marginLeft: 4,
  },
  separador: {
    color: '#979797',
    marginHorizontal: 8,
    fontSize: 14,
  },
  tipoTrabajo: {
    fontSize: 14,
    color: '#FF5733',
    fontWeight: '600',
  },

  // Descripción
  descripcionTrabajo: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 15,
  },

  // Footer del trabajo
  trabajoFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  salarioTrabajo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF5733',
  },
  fechaTrabajo: {
    fontSize: 14,
    color: '#979797',
    fontWeight: '500',
  },

  // Botón aplicar mejorado
  aplicarButton: {
    backgroundColor: '#FF5733',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 16,
    shadowColor: '#FF5733',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  aplicarTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
});