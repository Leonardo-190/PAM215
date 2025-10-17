//1.import:zona de importaciones 

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

//2.Main Zona de componentes
export default function ContadorScreen() {
  const [Contador, SetContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador</Text>
      <Text style={styles.texto2}>{Contador}</Text>

      <View style={styles.ContadorBotones}>
        <Button color={'#020002'} title="incrementar" onPress={() => SetContador(Contador + 1)} />
        <Button color={'#000000'} title="decrementar" onPress={() => SetContador(Contador - 1)} />
        <Button color={'#070200'} title="reiniciar" onPress={() => SetContador(0)} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

//3. Estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#75755e',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  texto: {
    fontFamily: 'Times New Roman',
    fontSize: 100,
    fontWeight: '500',
    color: '#ffffff',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  texto2: {
    fontFamily: 'Arial',
    fontSize: 100,
    fontWeight: '500',
    color: '#000000',
    fontStyle: 'normal',
    textDecorationLine: 'none',
  },
  ContadorBotones: {
    marginTop: 20,
    flexDirection: 'row-reverse',
    gap: 20,
  },
});
