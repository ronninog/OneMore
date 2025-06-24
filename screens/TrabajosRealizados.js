import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TrabajosRealizados({ navigation }) {
  return (
        <View style={styles.container}>
            <Text style={styles.title}>Trabajos Realizados</Text>
            <Button
                title="Volver"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

