import { useFonts, RobotoCondensed_400Regular } from '@expo-google-fonts/roboto-condensed';
import * as Font from 'expo-font'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const ListaDeTarefas = (props) => {
    let [fontsLoaded] = useFonts({
        RobotoCondensed_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.containerLista}>
            <Text style={styles.tarefa}>{props.nomeDaTarefa}</Text>
            <TouchableOpacity onPress={props.deleteTarefa} style={styles.botaoExcluir}>
                <AntDesign name="minuscircleo" size={24} color="black" />
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    containerLista: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: "pink",
        padding: 20,
        justifyContent: "space-around"
    },
    tarefa: {
        fontFamily: "RobotoCondensed_400Regular",
    },
    botaoExcluir: {
        paddingHorizontal: 10
    }
});

export default ListaDeTarefas