import { Modal, View, Text, Pressable, StyleSheet, TextInput, TouchableOpacity, Dimensions, } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';

const screenWidth = Dimensions.get('window').width;

export default function ModalAdd(props) {
  return (
    <Modal animationType="slide" transparent={true} visible={props.visible} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Adicionar Tarefa</Text>
          <Pressable onPress={props.close}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        <TextInput onChangeText={props.tarAtual} placeholder='Digite o nome da sua tarefa' style={styles.input} />
        <TouchableOpacity style={styles.btnSalvarTarefa} onPress={props.salvarTarefa}><Text style={styles.textoBtn}> Salvar Tarefa</Text></TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    position: "absolute",
    top: "15%",
    bottom: 0,
    right: 0,
    left: "10%",
    height: '40%',
    width: screenWidth * 0.8,
    backgroundColor: '#db949e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#b7616d',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  input: {
    backgroundColor: "#e3a9b1",
    padding: 10,
    marginHorizontal: "5%",
    marginVertical: "5%",
    width: "90%",
  },
  btnSalvarTarefa: {
    position: "absolute",
    width:"70%",
    bottom: "15%",
    left: "15%",
    right: 0,
    height: '20%',
    backgroundColor: "#b7616d",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent:"center"
  },
  textoBtn:{
    textAlign:"center",
    color: '#fff',
    fontSize: 16,
  }

})