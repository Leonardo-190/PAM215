import { Text, StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextInputScreen from './TextInputScreen';
import ImagebackScreen from './Imageback';
import ScrollScreen from './ScrollScreen';
import ActivityScreen from './ActivityScreen';
import FlatScreen from './FlatScreen';
import ModaScreen from './ModaScreen';
import BottomScreen from './BottomScreen';
export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'contador':
      return <ContadorScreen />;
    case 'botones':
      return <BotonesScreen />;
    case 'textinput':
      return <TextInputScreen />;
    case 'imagenback':
      return <ImagebackScreen />;
    case 'scroll':
      return <ScrollScreen />;
    case 'activity':
      return <ActivityScreen />;
    case 'flat':
      return <FlatScreen />;
    case 'moda':
      return <ModaScreen />;
    case 'bottom':
      return <BottomScreen />;
    case 'menu':
    default:
      return (
        <View>
          <Text>Menu de practicas</Text>
          <Button onPress={() => setScreen('contador')} title="pract:contador" />
          <Button onPress={() => setScreen('botones')} title="pract:botones" />
          <Button onPress={() => setScreen('textinput')} title="pract:textinput" />
          <Button onPress={() => setScreen('imagenback')} title="pract:imagenback" />
          <Button onPress={() => setScreen('scroll')} title="pract:scroll" />
          <Button onPress={() => setScreen('activity')} title="pract:activity" />
          <Button onPress={() => setScreen('flat')} title="pract:flat" />
          <Button onPress={() => setScreen('moda')} title="pract:moda" />
          <Button onPress={() => setScreen('bottom')} title="pract:bottom" />
            

        </View>
      );
  }
}

const styles = StyleSheet.create({});