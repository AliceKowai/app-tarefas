import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header  from './components/header';
import ListaDeTarefas from './components/listaDeTarefas';

const tarefas = [
  {
      nome:"Aprender react-native",
      data: "04/04/2023",
      hora: "10:00",
      id:1
  },
  {
      nome:"Aprender reactJS",
      data: "04/04/2023",
      hora: "2:30",
      id:2
  },
  {
      nome:"Assistir meu dorama",
      data: "04/04/2023",
      hora: "5:30",
      id:3
  }

]

const deleteTarefa = (id) =>{
  alert("Tarefa com "+ id +" foi excluida com sucesso")
}


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      {
        tarefas.map((val) => {
          return(
            <ListaDeTarefas key={val.id} nomeDaTarefa={val.nome} dataDaTarefa={val.data} horaDaTarefa={val.hora} deleteTarefa={() => {deleteTarefa(val.id)}} />
          )
        })
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
