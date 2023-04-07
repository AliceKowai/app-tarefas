import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Modal from './components/components/modal';
import Header  from './components/header';
import ListaDeTarefas from './components/listaDeTarefas';
import CircleButton from './components/components/butaoadd';



export default function App() {

  const [modal, setModal] = useState(false)
  const [tarefaAtual, setTarefaAtual] = useState("")

  const [tarefas, setTarefas] = useState( [
    {
    },
  
  ])

  const deleteTarefa = (id) =>{
    alert("Tarefa com "+ id +" foi excluida com sucesso")
    let newTarefas = tarefas.filter(function(val) {
      return val.id != id
    })
    setTarefas(newTarefas)
  }

  const fecharModal = () =>{
    if(modal == true){
        setModal(false)
    }
}

  const abrirModal = () => {
    if(modal == false){
      setModal(true)
  }
}

const salvarTarefi = () =>{
  setModal(false)
  let id = 0
  if(tarefas.length > 0){
    id = tarefas[tarefas.length - 1].id + 1
  }

  let tarefa = {id:id,tarefa:tarefaAtual};

  setTarefas([...tarefas, tarefa])
  console.log(tarefas)

}

  return (
    <SafeAreaView style={styles.container}>
      <Modal tarAtual={text => setTarefaAtual(text) } close={fecharModal} visible={modal} salvarTarefa={() => salvarTarefi()}/>
      <Header/>
      {
        tarefas.map((val) => {
          return(
            <ListaDeTarefas key={val.id} nomeDaTarefa={val.tarefa} dataDaTarefa={val.data} horaDaTarefa={val.hora} deleteTarefa={() => {deleteTarefa(val.id)}} />

          )
        })
      }
      <CircleButton open={abrirModal}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
