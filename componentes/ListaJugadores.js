import { View, StyleSheet } from "react-native";
import React, { Component } from "react"; // Importa Component de React
import Jugador from "./Jugadores";

export default function ListaJugadores() {
  const state = {
    Jugador1: 'Gavi',
    Jugador2: 'Pedri',
    Jugador3: 'Lewandowski',
    Jugador4: 'Araujo',
    Jugador5: 'Ter Stegen'
  };

  const players = Object.values(state); // Convierte el objeto en un array de valores

  return (
    <View style={styles.aside}>
      {players.map((jugador, index) => (
        <Jugador key={index} nombre={jugador} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  aside: {
    borderWidth: 2,
    borderColor: "#000000",
    flex: 1
  }
});
