import { View } from "react-native"
import { StyleSheet } from "react-native";
import React, { Component } from 'react'
import Jugadores from "./Jugadores";

export default class ListaJugadores extends Component {

  render() {
    const { equipoSeleccionado } = this.props;
    const { jugadorSeleccionado, JugadorSeleccionado } = this.props;

    return (
      <View style={styles.aside}>
        {equipoSeleccionado === 'FC Barcelona' && (
          <View>
            <Jugadores jugador={"Gavi"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
            <Jugadores jugador={"Pedri"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
            <Jugadores jugador={"Araujo"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
            <Jugadores jugador={"Lewandowski"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
            <Jugadores jugador={"TerStegen"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
          </View>
        )}
        {equipoSeleccionado === 'Real Madrid' && (
          <View>
            <Jugadores jugador={"Modric"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
            <Jugadores jugador={"Bellingham"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
            <Jugadores jugador={"ViniciusJr"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
            <Jugadores jugador={"Courtois"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
            <Jugadores jugador={"Militao"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
          </View>
        )}
        {equipoSeleccionado === 'Manchester City' && (
          <View>
            <Jugadores jugador={"KevinDeBruyne"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
            <Jugadores jugador={"Haaland"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
            <Jugadores jugador={"JAlvarez"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
            <Jugadores jugador={"Ederson"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
            <Jugadores jugador={"Grealish"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  aside: {
    borderWidth: 2,
    borderColor: "#000000",
    flex: 1
  }
});
