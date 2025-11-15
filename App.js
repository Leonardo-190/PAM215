import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MenuScreen from './intro/Screens/MenuScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MenuScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});