import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header  from './components/header';
import ListaDeTarefas from './components/listaDeTarefas';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <ListaDeTarefas nomeDaTarefa="Limpar a bunda" dataDaTarefa="03/04/2023"/>
      <ListaDeTarefas nomeDaTarefa="Limpar a bunda" dataDaTarefa="03/04/2023"/>
      <ListaDeTarefas nomeDaTarefa="Limpar a bunda" dataDaTarefa="03/04/2023"/>
      <ListaDeTarefas nomeDaTarefa="Limpar a bunda" dataDaTarefa="03/04/2023"/>
      <StatusBar backgroundColor='#ffff' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
