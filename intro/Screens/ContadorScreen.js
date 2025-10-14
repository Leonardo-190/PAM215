//1.import:zona de importaciones 

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
//2.Main Zona de componentes
export default function App() {
  
  const[Contador, SetContador]= useState(0);

  return (

    <View style={styles.container}>
      <Text style={styles.texto}>Contador</Text>
      <Text style={styles.texto2}>{Contador}</Text>

     <View style={styles.ContadorBotones}>
      <Button color={'#dd17f7ff'} title='incrementar' onPress={()=>SetContador(Contador+1)}> </Button>
      <Button color={'#240766ff'} title='decrementar' onPress={()=>SetContador(Contador-1)}> </Button>
      <Button color={'#f7580fff'} title='reiniciar' onPress={()=>SetContador(Contador-Contador)}> </Button>
      </View>
      <StatusBar style="auto" />
    </View>

  );
}
//3. Estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1eff00ff',
    alignItems: 'center',
    justifyContent: 'start',
  },
  texto:{
fontFamily:'Times New Roman',
fontSize:100,
fontweight:'500',
color:'#f30317ff',
frontStyle:'italic',
textDecorationLine:'line-through',
  },
  texto2:{
    fontFamily:'Arial',
    fontSize:100,
    fontweight:'500',
    color:'#3ca76cff',
    frontStyle:'normal',
    textDecorationLine:'none',
      },
      
      ContadorBotones:{
        marginTop:20,
        flexDirection:'row-reverse',
        gap:20,
      },
});
