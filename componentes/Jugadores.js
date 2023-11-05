import { Text } from "react-native"
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-web";
import React, { Component } from 'react'

const coloresJugadores = {
  Gavi: '#0a19b8',
  Pedri: '#0a19b8',
  Araujo: '#0a19b8',
  Lewandowski: '#0a19b8',
  TerStegen: '#0a19b8',
  Modric: '#8f19d6',
  Bellingham: '#8f19d6',
  ViniciusJr: '#8f19d6',
  Courtois: '#8f19d6',
  Militao: '#8f19d6',
  KevinDeBruyne: '#54c1ef',
  Haaland: '#54c1ef',
  JAlvarez: '#54c1ef',
  Ederson: '#54c1ef',
  Grealish: '#54c1ef',
};
class Jugadores extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    const jugadorColor = this.props.jugador === this.props.JugadorSeleccionado ? coloresJugadores[this.props.jugador] : 'white';
    
  return (
    <>
      <TouchableOpacity style={[styles.equipo, { backgroundColor: jugadorColor }]} onPress={() => this.props.jugadorSeleccionado(this.props.jugador)}><Text>{this.props.jugador}</Text></TouchableOpacity>
    </>
  );
  }
}
  


  export default Jugadores;

const styles = StyleSheet.create({
    equipo: {
        borderWidth: 2,
        borderColor: "#000000",
        margin: 10,
        borderRadius: 10,
        fontSize: 24,
        
      },
  });