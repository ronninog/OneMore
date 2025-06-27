import React, { useState , useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default function ChatScreen({navigation}) {
    const flatListRef = useRef(null);
  const [mensaje, setMensaje] = useState('');
  const [mensajes, setMensajes] = useState([
    { id: '1', texto: '¡Hola! ¿Cómo estás?', enviadoPorMi: false },
    { id: '2', texto: 'Muy bien, gracias. ¿Y tú?', enviadoPorMi: true },
  ]);

  const enviarMensaje = () => {
    if (mensaje.trim() === '') return;

    const nuevoMensaje = {
      id: Date.now().toString(),
      texto: mensaje,
      enviadoPorMi: true,
    };
     setMensajes([...mensajes, nuevoMensaje]);
    setMensaje('');
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.burbuja,
        item.enviadoPorMi ? styles.burbujaDerecha : styles.burbujaIzquierda,
      ]}
    >
      <Text style={styles.textoBurbuja}>{item.texto}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
     <FlatList
  ref={flatListRef}
  data={mensajes}
  keyExtractor={(item) => item.id}
  renderItem={renderItem}
  contentContainerStyle={{ padding: 10 }}
  onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
/>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={90}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Escribe un mensaje..."
            value={mensaje}
            onChangeText={setMensaje}
          />
          <TouchableOpacity style={styles.botonEnviar} onPress={enviarMensaje}>
            <Ionicons name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  burbuja: {
    maxWidth: '75%',
    padding: 10,
    borderRadius: 16,
    marginBottom: 10,
  },
  burbujaIzquierda: {
    backgroundColor: '#e6e6e6',
    alignSelf: 'flex-start',
    borderTopLeftRadius: 0,
  },
  burbujaDerecha: {
    backgroundColor: '#FF5733',
    alignSelf: 'flex-end',
    borderTopRightRadius: 0,
  },
  textoBurbuja: {
    color: 'white',
    fontSize: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 16,
  },
  botonEnviar: {
    marginLeft: 10,
    backgroundColor: '#FF5733',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
