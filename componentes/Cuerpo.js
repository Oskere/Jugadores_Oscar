import {View, StyleSheet} from "react-native";
import React from "react";
import ListaJugadores from "./ListaJugadores";
import ImagenJugador from "./ImagenJugador";

export default function Cuerpo() {
    return (
        <View style={styles.bodyStyle}>
            <ListaJugadores></ListaJugadores>
            <ImagenJugador></ImagenJugador>
        </View>
    )
}

const styles = StyleSheet.create({
   
    bodyStyle: {
        borderWidth: 2,
        borderColor: "#000000",
        flex: 1,
        flexDirection: 'row'
      },
  });