import React, { useState, useEffect } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert, Keyboard, TouchableWithoutFeedback
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';
import * as Sharing from 'expo-sharing';

export default function EditarPerfilScreen({ navigation }) {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [observaciones, setObservaciones] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [distMax, setDistMax] = useState('');
    const [profesion, setProfesion] = useState('');
    const [curriculum, setCurriculum] = useState(null);

    // Función para seleccionar PDF y guardar inmediatamente el URI y nombre
    const seleccionarPDF = async () => {
        try {
            const resultado = await DocumentPicker.getDocumentAsync({
                type: 'application/pdf',
                copyToCacheDirectory: true,
                multiple: false,
            });

            console.log('Resultado DocumentPicker:', resultado);

            if (!resultado.canceled && resultado.assets && resultado.assets.length > 0) {
                const archivo = resultado.assets[0];

                const nuevoCurriculum = {
                    uri: archivo.uri,
                    name: archivo.name || archivo.uri.split('/').pop()
                };

                setCurriculum(nuevoCurriculum);

                const datosGuardados = await AsyncStorage.getItem('perfilUsuario');
                const perfilAnterior = datosGuardados ? JSON.parse(datosGuardados) : {};

                const nuevoPerfil = {
                    ...perfilAnterior,
                    curriculumUri: nuevoCurriculum.uri,
                    curriculumName: nuevoCurriculum.name
                };

                await AsyncStorage.setItem('perfilUsuario', JSON.stringify(nuevoPerfil));
                Alert.alert('Currículum seleccionado', nuevoCurriculum.name);
            } else {
                Alert.alert('Cancelado', 'No se seleccionó ningún archivo.');
            }
        } catch (error) {
            console.error('Error seleccionando el PDF:', error);
            Alert.alert('Error', 'No se pudo seleccionar el currículum.');
        }
    };



    // Abrir el PDF usando el navegador interno
    const abrirCurriculum = async () => {
        if (curriculum?.uri) {
            const isAvailable = await Sharing.isAvailableAsync();
            if (isAvailable) {
                await Sharing.shareAsync(curriculum.uri);
            } else {
                Alert.alert('No disponible', 'Tu dispositivo no puede abrir este archivo directamente.');
            }
        } else {
            Alert.alert('Currículum no disponible', 'No has subido un currículum aún.');
        }
    };

    // Guardar todos los datos del perfil, respetando los previos
    const guardarPerfil = async () => {
        try {
            const datosGuardados = await AsyncStorage.getItem('perfilUsuario');
            const perfilAnterior = datosGuardados ? JSON.parse(datosGuardados) : {};

            const nuevoPerfil = {
                nombre: nombre || perfilAnterior.nombre || '',
                apellidos: apellidos || perfilAnterior.apellidos || '',
                correo: correo || perfilAnterior.correo || '',
                telefono: telefono || perfilAnterior.telefono || '',
                profesion: profesion || perfilAnterior.profesion || '',
                observaciones: observaciones || perfilAnterior.observaciones || '',
                curriculumUri: curriculum?.uri || perfilAnterior.curriculumUri || null,
                curriculumName: curriculum?.name || perfilAnterior.curriculumName || null,
            };

            await AsyncStorage.setItem('perfilUsuario', JSON.stringify(nuevoPerfil));
            Alert.alert('Guardado', 'Tu perfil ha sido guardado');
            navigation.goBack();
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'No se pudo guardar el perfil');
        }

    };

    // Cargar datos guardados al montar el componente
    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const datosGuardados = await AsyncStorage.getItem('perfilUsuario');
                if (datosGuardados) {
                    const perfil = JSON.parse(datosGuardados);
                    setNombre(perfil.nombre || '');
                    setApellidos(perfil.apellidos || '');
                    setCorreo(perfil.correo || '');
                    setTelefono(perfil.telefono || '');
                    setProfesion(perfil.profesion || '');
                    setObservaciones(perfil.observaciones || '');
                    if (perfil.curriculumUri) {
                        setCurriculum({
                            uri: perfil.curriculumUri,
                            name: perfil.curriculumName || 'CV guardado'
                        });
                    }
                }
            } catch (error) {
                console.error('Error al cargar perfil:', error);
            }
        };

        cargarDatos();
    }, []);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>

                
                <TouchableOpacity style={styles.goBack} onPress={navigation.goBack}>
                   <Ionicons name="arrow-back" size={24} color="#FF5733" />
                </TouchableOpacity>

                <Text style={styles.title}>Editar Perfil</Text>

                <TextInput
                    placeholder="Nombre"
                    style={styles.input}
                    value={nombre}
                    onChangeText={setNombre}
                />
                <TextInput
                    placeholder="Apellidos"
                    style={styles.input}
                    value={apellidos}
                    onChangeText={setApellidos}
                />
                <TextInput
                    placeholder="Correo electrónico"
                    style={styles.input}
                    value={correo}
                    onChangeText={setCorreo}
                    keyboardType="email-address"
                />
                <TextInput
                    placeholder="Número de teléfono"
                    style={styles.input}
                    value={telefono}
                    onChangeText={setTelefono}
                    keyboardType="phone-pad"
                />
                <TextInput
                    placeholder="Profesión"
                    style={styles.input}
                    value={profesion}
                    onChangeText={setProfesion}
                />
                  <TextInput
                    placeholder="Desplazamiento máximo"
                    style={styles.input}
                    value={telefono}
                    onChangeText={setDistMax}
                    keyboardType="phone-pad"
                />

                {curriculum ? (
                    <View style={{ marginBottom: 20 }}>
                        <Text style={{ marginLeft: 20, marginBottom: 8 }}>
                            📄 CV seleccionado: {curriculum.name || 'Nombre no disponible'}
                        </Text>

                        <TouchableOpacity style={styles.pdfButton} onPress={abrirCurriculum}>
                            <Ionicons name="eye-outline" size={20} color="#fff" />
                            <Text style={styles.pdfButtonText}>Ver currículum</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.pdfButton, { backgroundColor: '#007bff', marginTop: 10 }]}
                            onPress={seleccionarPDF}
                        >
                            <Ionicons name="refresh-outline" size={20} color="#fff" />
                            <Text style={styles.pdfButtonText}>Cambiar currículum</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity style={styles.pdfButton} onPress={seleccionarPDF}>
                        <Ionicons name="document-attach-outline" size={20} color="#fff" />
                        <Text style={styles.pdfButtonText}>Subir currículum (PDF)</Text>
                    </TouchableOpacity>
                )}

                <TextInput
                    placeholder="Observaciones"
                    style={styles.inputObservaciones}
                    multiline={true}
                    value={observaciones}
                    onChangeText={setObservaciones}
                />

                <TouchableOpacity style={styles.saveButton} onPress={guardarPerfil}>
                    <Text style={styles.saveButtonText}>Guardar cambios</Text>
                </TouchableOpacity>


            

                {/* Botón opcional para ver datos guardados */}

            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginTop: 10,
        marginBottom: 30,
        fontWeight: 'bold',
        color: '#FF5733',
        textAlign: 'center'
    },
    input: {
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 8,
        marginBottom: 15,
        fontSize: 16,
    },
    inputObservaciones: {
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 12,
        paddingVertical: 30,
        borderRadius: 8,
        marginBottom: 15,
        fontSize: 16,
    },
    pdfButton: {
        backgroundColor: '#FF5733',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderRadius: 8,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    pdfButtonText: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: '#28a745',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    goBack:{
        alignItems: 'flex-start',
        marginLeft: 10,
        
    },
});
