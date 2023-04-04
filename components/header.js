import React from "react";
import { ImageBackground, Text, Dimensions, StyleSheet, View } from "react-native";

import bgHeader from '../resources/image/background.jpg'

const width = Dimensions.get('screen').width

const Header = () => {
    return(
            <ImageBackground source={bgHeader} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Lista de Tarefas</Text>
            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200 / 500 * width,
        marginTop:40
    },
    text: {
        color: 'white',
        fontSize: 25,
        height:200 / 500 * width,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop:40,
        backgroundColor: '#000000c0',
    },
})

export default Header