import {View, StyleSheet} from "react-native";
import React from "react";
import Jugador from "./Jugadores";

export default function ListaJugadores() {
    return (
          <View style={styles.aside}>
            <Jugador nombre="Gavi"></Jugador>
            <Jugador nombre="Ter Stegen"></Jugador>
            <Jugador nombre="Ferran"></Jugador>
            <Jugador nombre="Pedri"></Jugador>
            <Jugador nombre="De Jong"></Jugador>
          </View>
    )
}

const styles = StyleSheet.create({
  aside:{
    borderWidth: 2,
    borderColor: "#000000",
    flex: 1
  }
});
