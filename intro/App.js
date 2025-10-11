//1.import:zona de importaciones 

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
//2.Main Zona de componentes
export default function App() {
  const[Contador, SetContador]= useState(0);
  return (

    <View style={styles.container}>
      <Text>Contador:{Contador}</Text>
      <Button title='incrementar' onPress={()=>SetContador(Contador+1)}> </Button>
      <Button title='decrementar' onPress={()=>SetContador(Contador-1)}> </Button>
      <Button title='reiniciar' onPress={()=>SetContador(Contador-Contador)}> </Button>
      <StatusBar style="auto" />
    </View>

  );
}
//3. Estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
