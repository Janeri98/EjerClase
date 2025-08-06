import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { useEstudianteContext } from '../Provider/EstudianteProvider';

export default function ListaEstudiantes() {
  const { estudiantes } = useEstudianteContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Lista de Estudiantes</Text>
      <FlatList
        data={estudiantes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.item}>{item.id}. {item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'hsla(234, 63%, 71%, 0.30)', // fondo translúcido
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'rgba(35, 35, 197, 1)',
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    padding: 10,
    borderRadius: 12,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  item: {
    fontSize: 18,
    color: '#333',
  },
});

