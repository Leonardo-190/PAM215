import React from 'react';
import { View, Text, StyleSheet, FlatList, SectionList, ScrollView } from 'react-native';

export default function FlatScreen() {
  const datos = [
    { id: '1', nombre: 'Manzana' },
    { id: '2', nombre: 'Platano' },
    { id: '3', nombre: 'Naranja' },
    { id: '4', nombre: 'Uva' },
    { id: '5', nombre: 'Fresa' },
    { id: '6', nombre: 'Sandia' },
  ];

  const secciones = [
    {
      titulo: 'Frutas',
      data: [
        { nombre: 'Manzana' },
        { nombre: 'Platano' },
        { nombre: 'Naranja' },
        { nombre: 'Uva' },
      ],
    },
    {
      titulo: 'Verduras',
      data: [
        { nombre: 'Zanahoria' },
        { nombre: 'Lechuga' },
        { nombre: 'Tomate' },
        { nombre: 'Brócoli' },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Ejemplo FlatList</Text>

        <FlatList
          data={datos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.elementos}>
              <Text style={styles.text}>{item.nombre}</Text>
            </View>
          )}
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View style={styles.separador} />}
        />

        <Text style={styles.titulo}>Ejemplo de SectionList</Text>

        <SectionList
          sections={secciones}
          keyExtractor={(item, index) => item.nombre + index}
          renderItem={({ item }) => (
            <View style={styles.itemSeccion}>
              <Text style={styles.text}>{item.nombre}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { titulo } }) => (
            <View style={styles.Encabezado}>
              <Text style={styles.tituloSeccion}>{titulo}</Text>
            </View>
          )}
          scrollEnabled={false}
          stickySectionHeadersEnabled={true}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0ff',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  elementos: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
  separador: {
    height: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  itemSeccion: {
    padding: 10,
    backgroundColor: '#e0ffe0',
    borderRadius: 5,
  },
  Encabezado: {
    backgroundColor: '#c0c0c0',
    padding: 8,
  },
  tituloSeccion: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
