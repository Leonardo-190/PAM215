import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Alert, Button } from 'react-native';

export default function TextInputScreen() {
    const [nombre, setNombre] = useState('');
    const [contrasenia, setContra] = useState('');
    const [telefono, setTelefono] = useState('');

    const mostrarAlerta = () => {
        if (nombre.trim() === '' || contrasenia.trim() === '' || telefono.trim() === '') {
            const msg = 'Por favor complete todos los campos.';
            Alert.alert('Campos incompletos', msg, [{ text: 'OK' }]);
            try { if (typeof alert === 'function') alert(msg); } catch (e) { /* noop */ }
        } else {
            const msg = `Nombre: ${nombre}\nContraseña: ${contrasenia}\nTeléfono: ${telefono}`;
            Alert.alert('Datos ingresados', msg, [{ text: 'OK' }]);
            try { if (typeof alert === 'function') alert(msg); } catch (e) { /* noop */ }
        }
    }



    return (
        <View style={styles.container}>
            <Text style={styles.text}> TextInput & Alert </Text>
            <Text> Nombre: </Text>
            <TextInput
                placeholder={'Escribe tu nombre aquí'}
                value={nombre}
                onChangeText={setNombre}
                style={styles.input}
            />
            <Text> Contraseña: </Text>
            <TextInput
                placeholder={'Escribe tu contraseña aquí'}
                secureTextEntry={true}
                value={contrasenia}
                onChangeText={setContra}
                style={styles.input}
            />
            <Text> Telefono: </Text>
            <TextInput
                keyboardType={'phone-pad'}
                placeholder={'Escribe tu telefono aquí'}
                value={telefono}
                onChangeText={setTelefono}
                style={styles.input}
            />

            <Button
                onPress={mostrarAlerta}
                title={'Mostrar Alerta'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#05eeffff',
    },
    text: {
        fontSize: 30,
        fontWeight: '700',
        color: '#ffffff',
        fontStyle: 'italic',
        letterSpacing: 1,
        textAlign: 'center',
        marginBottom: 12,
    },
input: {
    width: '80%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#f8f6f6',
},
});