import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { EstudianteProvider } from './Provider/EstudianteProvider';
import ListaEstudiantes from './componentes/ListaEstudiantes';

export default function App() {
  return (
    <EstudianteProvider>
      <View style={styles.container}>
        <ListaEstudiantes />
        <StatusBar style="auto" />
      </View>
    </EstudianteProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

