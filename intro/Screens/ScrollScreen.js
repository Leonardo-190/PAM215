import { Text, View, ScrollView, StyleSheet, Button } from 'react-native';
import React, { useState, useRef } from 'react';

export default function ScrollScreen() {
const scrollRef = useRef();
const iralfinal= () => {
  scrollRef.current.scrollToEnd({ animated: true });
}


  return (
    <ScrollView
    ref={scrollRef}
      style={Styles.container}
      contentContainerStyle={Styles.contentContainer}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
    >
      <Text style={Styles.Titulo}>practica: scrollView</Text>
      <Text style={Styles.Titulo2}>scrollView</Text>
      
      <View>
      <Button color={'#08f814ff'} title="Ir al final" onPress={iralfinal} />
      </View>

      <View style={Styles.elemento}>
        <Text style={Styles.text}>Elemento 1</Text>
      </View>

      <View style={Styles.elemento}>
        <Text style={Styles.text}>Elemento 2</Text>
      </View>

      <View style={Styles.elemento}>
        <Text style={Styles.text}>Elemento 3</Text>
      </View>

      <View style={Styles.elemento}>
        <Text style={Styles.text}>Elemento 4</Text>
      </View>

      <View style={Styles.elemento}>
        <Text style={Styles.text}>Elemento 5</Text>
      </View>

      <Text style={Styles.Titulo2}>Ejemplo desplazamiento horizontal</Text>

<ScrollView
        horizontal
        nestedScrollEnabled={true}
        style={Styles.scrollhorizontal}
        showsHorizontalScrollIndicator={true}

    ></ScrollView>

      <ScrollView horizontal style={Styles.scrollhorizontal}>
        <View style={Styles.elemento2}>
          <Text style={Styles.text}>Cuadro1</Text>
        </View>
        <View style={Styles.elemento2}>
          <Text style={Styles.text}>Cuadro2</Text>
        </View>
        <View style={Styles.elemento2}>
          <Text style={Styles.text}>Cuadro3</Text>
        </View>
        <View style={Styles.elemento2}>
          <Text style={Styles.text}>Cuadro4</Text>
        </View>
        <View style={Styles.elemento2}>
          <Text style={Styles.text}>Cuadro5</Text>
        </View>
        <View style={Styles.elemento2}>
          <Text style={Styles.text}>Cuadro6</Text>
        </View>
        <View style={Styles.elemento2}>
          <Text style={Styles.text}>Cuadro7</Text>
        </View>
        <View style={Styles.elemento2}>
          <Text style={Styles.text}>Cuadro8</Text>
        </View>
        <View style={Styles.elemento2}>
          <Text style={Styles.text}>Cuadro9</Text>
        </View>
        <View style={Styles.elemento2}>
          <Text style={Styles.text}>Cuadro10</Text>
        </View>
        <View style={Styles.elemento2}>
          <Text style={Styles.text}>Cuadro11</Text>
        </View>
        <View style={Styles.elemento2}>
          <Text style={Styles.text}>Cuadro12</Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#ad1c1cff',
  },
  contentContainer: {
    padding: 20,
  },
  Titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000ff',
    textAlign: 'center',
  },
  Titulo2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
  elemento: {
    width: '100%',
    height: 100,
    backgroundColor: '#03d7f3ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  elemento2: {
    width: 120,
    height: 120,
    backgroundColor: '#51ff00ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Courier',
    color: '#0f0000ff',
    fontWeight: '900',
    textDecorationLine: 'underline',
  },
  scrollhorizontal: {
    marginVertical: 10,
    width: '100%',
    height: 150,
  },
});
