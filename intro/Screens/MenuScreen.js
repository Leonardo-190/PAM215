import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, ScrollView } from 'react-native';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextInputScreen from './TextInputScreen';
import Imageback from './Imageback';
import ScrollScreen from './ScrollScreen';
import ActivityScreen from './ActivityScreen';
import FlatScreen from './FlatScreen';
import ModaScreen from './ModaScreen';
import BottomScreen from './BottomScreen';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  if (screen === 'menu') {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Menú de Prácticas</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button onPress={() => setScreen('contador')} title="Contador" />
          </View>
          <View style={styles.buttonWrapper}>
            <Button onPress={() => setScreen('botones')} title="Botones" />
          </View>
          <View style={styles.buttonWrapper}>
            <Button onPress={() => setScreen('textinput')} title="Text Input" />
          </View>
          <View style={styles.buttonWrapper}>
            <Button onPress={() => setScreen('imagenback')} title="Imagen Fondo" />
          </View>
          <View style={styles.buttonWrapper}>
            <Button onPress={() => setScreen('scroll')} title="Scroll" />
          </View>
          <View style={styles.buttonWrapper}>
            <Button onPress={() => setScreen('activity')} title="Activity" />
          </View>
          <View style={styles.buttonWrapper}>
            <Button onPress={() => setScreen('flat')} title="FlatList" />
          </View>
          <View style={styles.buttonWrapper}>
            <Button onPress={() => setScreen('moda')} title="Modal" />
          </View>
          <View style={styles.buttonWrapper}>
            <Button onPress={() => setScreen('bottom')} title="Bottom Sheet" />
          </View>
        </View>
      </ScrollView>
    );
  }

  // Render the selected real screen (except BottomScreen which is left for later)
  if (screen !== 'menu') {
    let Selected = null;
    switch (screen) {
      case 'contador':
        Selected = ContadorScreen;
        break;
      case 'botones':
        Selected = BotonesScreen;
        break;
      case 'textinput':
        Selected = TextInputScreen;
        break;
      case 'imagenback':
        Selected = Imageback;
        break;
      case 'scroll':
        Selected = ScrollScreen;
        break;
      case 'activity':
        Selected = ActivityScreen;
        break;
      case 'flat':
        Selected = FlatScreen;
        break;
      case 'bottom':
        Selected = BottomScreen;
        break;
      case 'moda':
        Selected = ModaScreen;
        break;
      default:
        Selected = null;
    }

    return (
      <View style={styles.selectedContainer}>
        <View style={styles.header}>
          <Button title="← Volver" onPress={() => setScreen('menu')} />
        </View>
        <View style={styles.selectedScreen}>
          {Selected ? <Selected /> : (
            <View style={styles.screenPlaceholder}>
              <Text style={styles.placeholderTitle}>{screen.toUpperCase()}</Text>
              <Text style={styles.placeholderText}>Pantalla de práctica: {screen}</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f6f6f6',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    paddingBottom: 20,
  },
  buttonWrapper: {
    marginVertical: 8,
  },
  screenPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  placeholderTitle: {
    fontSize: 28,
    fontWeight: '700',
  },
  placeholderText: {
    marginTop: 8,
    fontSize: 16,
    color: '#555',
  },
  selectedContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  selectedScreen: {
    flex: 1,
  },
});