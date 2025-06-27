import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function DetalleOfertaTrabajo({ navigation }) {
  const [aplicado, setAplicado] = useState(false);
  
  // Datos de la oferta (normalmente vendrían de route.params)
  const oferta = {
    id: 1,
    titulo: "Camarera para Restaurante Italiano",
    empresa: "Bella Italia",
    ubicacion: "Malasaña, Madrid",
    salario: "€13-15/hora",
    tipo: "Temporal",
    icono: "restaurant",
    urgente: true,
    descripcionCompleta: "Buscamos camarera con experiencia para restaurante italiano en el corazón de Malasaña. Ambiente dinámico y equipo joven. Se requiere experiencia previa en servicio de mesa y conocimientos básicos de italiano valorados.",
    horarios: "12:00 - 22:00",
    duracion: "3 días",
    fechas: [
      { dia: "Viernes", fecha: "28 Jun", disponible: true },
      { dia: "Sábado", fecha: "29 Jun", disponible: true },
      { dia: "Domingo", fecha: "30 Jun", disponible: false }
    ],
    requisitos: [
      "Experiencia mínima de 1 año en hostelería",
      "Disponibilidad horaria completa",
      "Actitud positiva y trabajo en equipo",
      "Conocimientos básicos de italiano (valorado)"
    ],
    beneficios: [
      "Pago diario al finalizar turno",
      "Comida incluida durante el servicio",
      "Propinas adicionales",
      "Posibilidad de trabajo continuado"
    ],
    contacto: {
      nombre: "Marco Rossi",
      telefono: "+34 666 123 456",
      email: "marco@bellaitalia.es"
    },
    dresscode: {
      titulo: "Código de vestimenta requerido",
      descripcion: "Uniforme proporcionado por el restaurante. Traer zapatos negros antideslizantes.",
      fotos: [
        { id: 1, uri: "https://via.placeholder.com/150x200/FF5733/ffffff?text=Uniforme", descripcion: "Camisa blanca + delantal" },
        { id: 2, uri: "https://via.placeholder.com/150x200/333333/ffffff?text=Zapatos", descripcion: "Zapatos antideslizantes" }
      ]
    },
    herramientas: [
      "Libreta y bolígrafo (proporcionados)",
      "Zapatos de seguridad negros (traer propios)",
      "Reloj para control de horarios"
    ]
  };

  const aplicarTrabajo = () => {
    setAplicado(true);
    // Aquí iría la lógica para aplicar al trabajo
  };

  const renderFecha = (fecha) => (
    <View key={fecha.fecha} style={[styles.fechaCard, !fecha.disponible && styles.fechaNoDisponible]}>
      <View style={styles.fechaContent}>
        <Text style={[styles.diaSemana, !fecha.disponible && styles.textoDeshabilitado]}>{fecha.dia}</Text>
        <Text style={[styles.fechaNumero, !fecha.disponible && styles.textoDeshabilitado]}>{fecha.fecha}</Text>
      </View>
      {!fecha.disponible && (
        <View style={styles.ocupadoBadge}>
          <Text style={styles.ocupadoTexto}>Ocupado</Text>
        </View>
      )}
    </View>
  );

  const renderFotoDresscode = (foto) => (
    <View key={foto.id} style={styles.fotoContainer}>
      <Image source={{ uri: foto.uri }} style={styles.fotoUniforme} />
      <Text style={styles.fotoDescripcion}>{foto.descripcion}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#FF5733" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalle del Trabajo</Text>
        <TouchableOpacity>
          <Ionicons name="bookmark-outline" size={24} color="#FF5733" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header de la oferta */}
        <View style={styles.ofertaHeader}>
          {oferta.urgente && (
            <View style={styles.urgenteTag}>
              <Text style={styles.urgenteTexto}>URGENTE</Text>
            </View>
          )}
          
          <View style={styles.iconoEmpresa}>
            <View style={styles.iconBackground}>
              <Ionicons name={oferta.icono} size={32} color="#FF5733" />
            </View>
          </View>

          <Text style={styles.tituloOferta}>{oferta.titulo}</Text>
          <Text style={styles.empresaOferta}>{oferta.empresa}</Text>
          
          <View style={styles.ubicacionContainer}>
            <Ionicons name="location" size={16} color="#979797" />
            <Text style={styles.ubicacionOferta}>{oferta.ubicacion}</Text>
          </View>

          <View style={styles.salarioContainer}>
            <Text style={styles.salarioOferta}>{oferta.salario}</Text>
            <Text style={styles.tipoOferta}>{oferta.tipo}</Text>
          </View>
        </View>

        {/* Fechas disponibles */}
        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>Fechas Disponibles ({oferta.duracion})</Text>
          <Text style={styles.horarioInfo}>Horario: {oferta.horarios}</Text>
          <View style={styles.fechasContainer}>
            {oferta.fechas.map(renderFecha)}
          </View>
        </View>

        {/* Descripción */}
        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>Descripción</Text>
          <Text style={styles.descripcionTexto}>{oferta.descripcionCompleta}</Text>
        </View>

        {/* Requisitos */}
        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>Requisitos</Text>
          {oferta.requisitos.map((requisito, index) => (
            <View key={index} style={styles.listItem}>
              <Ionicons name="checkmark-circle" size={20} color="#28a745" />
              <Text style={styles.listTexto}>{requisito}</Text>
            </View>
          ))}
        </View>

        {/* Beneficios */}
        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>Beneficios</Text>
          {oferta.beneficios.map((beneficio, index) => (
            <View key={index} style={styles.listItem}>
              <Ionicons name="star" size={20} color="#FFD700" />
              <Text style={styles.listTexto}>{beneficio}</Text>
            </View>
          ))}
        </View>

        {/* Código de vestimenta */}
        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>Código de Vestimenta</Text>
          <Text style={styles.dresscodeDescripcion}>{oferta.dresscode.descripcion}</Text>
          
          <View style={styles.fotosContainer}>
            {oferta.dresscode.fotos.map(renderFotoDresscode)}
          </View>
        </View>

        {/* Herramientas necesarias */}
        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>¿Qué necesitas traer?</Text>
          {oferta.herramientas.map((herramienta, index) => (
            <View key={index} style={styles.listItem}>
              <Ionicons name="construct" size={20} color="#FF5733" />
              <Text style={styles.listTexto}>{herramienta}</Text>
            </View>
          ))}
        </View>

        {/* Información de contacto */}
        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>Contacto</Text>
          <View style={styles.contactoCard}>
            <View style={styles.contactoInfo}>
              <Text style={styles.contactoNombre}>{oferta.contacto.nombre}</Text>
              <Text style={styles.contactoDetalle}>{oferta.contacto.telefono}</Text>
              <Text style={styles.contactoDetalle}>{oferta.contacto.email}</Text>
            </View>
            <TouchableOpacity style={styles.contactoButton}>
              <Ionicons name="call" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Botón fijo de aplicar */}
      <View style={styles.botonContainer}>
        <TouchableOpacity 
          style={[styles.aplicarButton, aplicado && styles.aplicarButtonDeshabilitado]}
          onPress={aplicarTrabajo}
          disabled={aplicado}
        >
          <Text style={styles.aplicarTexto}>
            {aplicado ? 'Aplicación Enviada ✓' : 'Aplicar Ahora'}
          </Text>
          {!aplicado && <Ionicons name="arrow-forward" size={20} color="#fff" />}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  
  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },

  scrollView: {
    flex: 1,
  },

  // Header de la oferta
  ofertaHeader: {
    backgroundColor: '#fff',
    padding: 25,
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  urgenteTag: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#FF5733',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  urgenteTexto: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  iconoEmpresa: {
    marginBottom: 15,
  },
  iconBackground: {
    backgroundColor: '#ffe3dd',
    borderRadius: 25,
    padding: 20,
    shadowColor: '#FF5733',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  tituloOferta: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  empresaOferta: {
    fontSize: 18,
    color: '#666',
    marginBottom: 12,
    fontWeight: '500',
  },
  ubicacionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  ubicacionOferta: {
    fontSize: 16,
    color: '#979797',
    marginLeft: 6,
  },
  salarioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  salarioOferta: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF5733',
  },
  tipoOferta: {
    fontSize: 16,
    color: '#666',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },

  // Secciones
  seccion: {
    backgroundColor: '#fff',
    margin: 15,
    marginBottom: 0,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  tituloSeccion: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },

  // Fechas
  horarioInfo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
    fontWeight: '500',
  },
  fechasContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  fechaCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    minWidth: 80,
    borderWidth: 2,
    borderColor: '#FF5733',
    position: 'relative',
  },
  fechaNoDisponible: {
    backgroundColor: '#f0f0f0',
    borderColor: '#ccc',
    opacity: 0.6,
  },
  fechaContent: {
    alignItems: 'center',
  },
  diaSemana: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF5733',
    marginBottom: 4,
  },
  fechaNumero: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  textoDeshabilitado: {
    color: '#999',
  },
  ocupadoBadge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#dc3545',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  ocupadoTexto: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },

  // Descripción
  descripcionTexto: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },

  // Listas
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  listTexto: {
    fontSize: 16,
    color: '#666',
    marginLeft: 12,
    flex: 1,
    lineHeight: 22,
  },

  // Dresscode
  dresscodeDescripcion: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    lineHeight: 22,
  },
  fotosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  fotoContainer: {
    alignItems: 'center',
  },
  fotoUniforme: {
    width: 120,
    height: 160,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    marginBottom: 8,
  },
  fotoDescripcion: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    fontWeight: '500',
  },

  // Contacto
  contactoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 12,
  },
  contactoInfo: {
    flex: 1,
  },
  contactoNombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  contactoDetalle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  contactoButton: {
    backgroundColor: '#FF5733',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#FF5733',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },

  // Botón aplicar
  botonContainer: {
    backgroundColor: '#fff',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  aplicarButton: {
    backgroundColor: '#FF5733',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    shadowColor: '#FF5733',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  aplicarButtonDeshabilitado: {
    backgroundColor: '#28a745',
  },
  aplicarTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },

  bottomPadding: {
    height: 20,
  },
});