
import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Switch } from 'react-native';

export default function BotonesScreen() {
  const [esEncendido, setEsEncendido] = useState(false);
  const [color, cambiarColor] = useState('yellow');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Control de luz</Text>

      <Text style={[styles.texto, { color: esEncendido ? color : 'black' }]}>
        {esEncendido ? 'La luz está encendida' : 'La luz está apagada'}
      </Text>

      <Switch
        value={esEncendido}
        onValueChange={(valorNuevo) => setEsEncendido(valorNuevo)}
        trackColor={{ true: 'yellow', false: 'gray' }}
      />

      <View style={styles.botones}>
        <Button title={"Amarillo"} color={'#c2d46eff'} onPress={() => esEncendido && cambiarColor('yellow')} />
        <Button title={"Azul"} color={'#0f0283ff'} onPress={() => esEncendido && cambiarColor('blue')} />
        <Button title={"Morado"} color={'#9f0cdaff'} onPress={() => esEncendido && cambiarColor('purple')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#098e97ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#050000ff',
  },
  texto: {
    fontSize: 40,
    marginVertical: 20,
  },
  botones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '35%',
    marginTop: 10,
  },
});
