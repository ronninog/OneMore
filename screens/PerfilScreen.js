import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function PerfilScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Header con botón editar */}
        <TouchableOpacity style={styles.editar_button_style} onPress={() => console.log('Editar perfil')}>
          <Ionicons name="create-outline" size={18} color="#FF5733" />
          <Text style={styles.editar_text_style}>Editar</Text>
        </TouchableOpacity>

        {/* Contenedor de foto de perfil */}
        <View style={styles.fotoContainer}>
          <Image
            source={require('../assets/camarera_perfil.jpg')}
            style={styles.imagen}
          />
        </View>

        {/* Información básica del usuario */}
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>Marta Martinez</Text>
          <Text style={styles.userTitle}>Camarera Profesional</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Ionicons name="star" size={16} color="#FFD700" />
            <Ionicons name="star" size={16} color="#FFD700" />
            <Ionicons name="star" size={16} color="#FFD700" />
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>4.9 (127 valoraciones)</Text>
          </View>
        </View>

        {/* Tarjetas de información rápida */}
        <View style={styles.quickInfoContainer}>
          <TouchableOpacity style={styles.quickInfoCard}>
            <Ionicons name="mail-outline" size={24} color="#FF5733" />
            <Text style={styles.quickInfoText}>Mensajes</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickInfoCard}>
            <Ionicons name="person-outline" size={24} color="#FF5733" />
            <Text style={styles.quickInfoText}>Mi Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickInfoCard}>
            <Ionicons name="briefcase-outline" size={24} color="#FF5733" />
            <Text style={styles.quickInfoText}>Trabajos</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Estadísticas del trabajador */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>47</Text>
            <Text style={styles.statLabel}>Trabajos completados</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>98%</Text>
            <Text style={styles.statLabel}>Tasa de finalización</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2.3</Text>
            <Text style={styles.statLabel}>Años en la app</Text>
          </View>
        </View>

        {/* Botón principal - Buscar Trabajo */}
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('BuscarTrabajo')}>
          <View style={styles.primaryButtonContent}>
            <Ionicons name="search" size={24} color="#fff" />
            <Text style={styles.primaryButtonText}>Buscar Trabajos Disponibles</Text>
            <Ionicons name="chevron-forward" size={20} color="#fff" />
          </View>
        </TouchableOpacity>

        {/* Sección de trabajos recientes */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Trabajos Recientes</Text>
          
          <TouchableOpacity style={styles.jobCard}>
            <View style={styles.jobCardLeft}>
              <View style={styles.jobIcon}>
                <Ionicons name="restaurant" size={20} color="#FF5733" />
              </View>
              <View style={styles.jobInfo}>
                <Text style={styles.jobTitle}>Camarera - Hotel Schweizerhof</Text>
                <Text style={styles.jobDate}>15 Jun 2025 • 8 horas</Text>
                <Text style={styles.jobPay}>CHF 25/hora</Text>
              </View>
            </View>
            <View style={styles.jobStatus}>
              <Text style={styles.jobStatusText}>Completado</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.jobCard}>
            <View style={styles.jobCardLeft}>
              <View style={styles.jobIcon}>
                <Ionicons name="wine" size={20} color="#FF5733" />
              </View>
              <View style={styles.jobInfo}>
                <Text style={styles.jobTitle}>Evento Privado - Villa Honegg</Text>
                <Text style={styles.jobDate}>12 Jun 2025 • 6 horas</Text>
                <Text style={styles.jobPay}>CHF 30/hora</Text>
              </View>
            </View>
            <View style={styles.jobStatus}>
              <Text style={styles.jobStatusText}>Completado</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Opciones adicionales */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="calendar-outline" size={22} color="#FF5733" />
            <Text style={styles.menuText}>Mi Calendario</Text>
            <Ionicons name="chevron-forward" size={18} color="#ccc" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="card-outline" size={22} color="#FF5733" />
            <Text style={styles.menuText}>Historial de Pagos</Text>
            <Ionicons name="chevron-forward" size={18} color="#ccc" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="school-outline" size={22} color="#FF5733" />
            <Text style={styles.menuText}>Certificaciones</Text>
            <Ionicons name="chevron-forward" size={18} color="#ccc" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="settings-outline" size={22} color="#FF5733" />
            <Text style={styles.menuText}>Configuración</Text>
            <Ionicons name="chevron-forward" size={18} color="#ccc" />
          </TouchableOpacity>
        </View>

      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  
  // Header
  editar_button_style: {
    position: 'absolute',
    top: 50,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    zIndex: 1,
  },
  editar_text_style: {
    color: '#FF5733',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
  },

  // Foto de perfil
  fotoContainer: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 20,
  },
  imagen: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },

  // Información del usuario
  userInfoContainer: {
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  userTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },

  // Tarjetas de información rápida
  quickInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  quickInfoCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    position: 'relative',
  },
  quickInfoText: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FF5733',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },

  // Estadísticas
  statsContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 25,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF5733',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#eee',
  },

  // Botón principal
  primaryButton: {
    backgroundColor: '#FF5733',
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 30,
    shadowColor: '#FF5733',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  primaryButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },

  // Secciones
  sectionContainer: {
    marginHorizontal: 20,
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },

  // Tarjetas de trabajo
  jobCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  jobCardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  jobIcon: {
    backgroundColor: '#fff3f0',
    borderRadius: 8,
    padding: 8,
    marginRight: 12,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  jobDate: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  jobPay: {
    fontSize: 12,
    color: '#FF5733',
    fontWeight: '600',
  },
  jobStatus: {
    backgroundColor: '#e8f5e8',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  jobStatusText: {
    fontSize: 11,
    color: '#4caf50',
    fontWeight: '600',
  },

  // Menú
  menuContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    marginLeft: 16,
  },
});