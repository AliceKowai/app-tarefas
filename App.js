import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Modal from './components/components/modal';
import Header  from './components/header';
import ListaDeTarefas from './components/listaDeTarefas';
import CircleButton from './components/components/butaoadd';



export default function App() {

  const [modal, setModal] = useState(false)
  const [tarefaAtual, setTarefaAtual] = useState("")

  const [tarefas, setTarefas] = useState( [])
  var newTarefas = []

  //use effect rodando assim que a aplicação é iniciada

  useEffect(()=>{
    (async() =>{
      setModal(false)
      let id = 0
      if(tarefas.length > 0){
        id = tarefas[tarefas.length - 1].id + 1
      }
    
      let tarefa = {id:id,tarefa:tarefaAtual};
    
      try {
        await AsyncStorage.setTarefas([...tarefas, tarefa])
        if(tarefas == null){
          setTarefas([])
        }else{
          setTarefas(JSON.parse(tarefaAtual)) 
        }
      }catch(error){
        console.error('Erro salvar Tarefa')
      }
    
    }
  
    )
  })

  // Deletar as tarefas que estão salvas localmente

  function deletarTarefa(id){
    alert('Tarefa com id '+id+' foi deletada com sucesso!');
    //TODO: Deletar do array/estado a tarefa com id especificado!
    let newTarefas = tarefas.filter(function(val){
          return val.id != id;
    });

    setTarefas(newTarefas);
   
    (async () => {
      try {
        await AsyncStorage.setItem('tarefas', JSON.stringify(newTarefas));
        //console.log('chamado');
      } catch (error) {
        // Error saving data
      }
    })();
    
}



  const salvarTarefi = async() =>{
    setModal(false)
    let id = 0
    if(tarefas.length > 0){
      id = tarefas[tarefas.length - 1].id + 1
    }
  
    let tarefa = {id:id,tarefa:tarefaAtual};
  
    setTarefas([...tarefas, tarefa])
    console.log(tarefas)
  
    (async()=>{
      try {
        await AsyncStorage.setItem('tarefas', JSON.stringify(newTarefas))
        console.log('Chamado')
      } catch (error) {
        
      }
    })()
  
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

  return (
    <SafeAreaView style={styles.container}>
      <Modal tarAtual={text => setTarefaAtual(text) } close={fecharModal} visible={modal} salvarTarefa={() => salvarTarefi()}/>
      <Header/>
      {
        tarefas.map((val) => {
          return(
            <ListaDeTarefas key={val.id} nomeDaTarefa={val.tarefa} deleteTarefa={() => {deletarTarefa(val.id)}} />

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
