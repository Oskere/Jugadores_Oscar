import { Text } from "react-native"
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-web";
import React, { Component } from 'react'

const coloresJugadores = {
  Gavi: '#2F70A5',
  Pedri: '#6379B6',
  Araujo: '#5ECBCC',
  Lewandowski: '#3C7D8C',
  TerStegen: '#7CDEC5',
  Modric: '#2F70A5',
  Bellingham: '#6379B6',
  ViniciusJr: '#5ECBCC',
  Courtois: '#3C7D8C',
  Militao: '#7CDEC5',
  KevinDeBruyne: '#2F70A5',
  Haaland: '#6379B6',
  JAlvarez: '#5ECBCC',
  Ederson: '#3C7D8C',
  Grealish: '#7CDEC5',
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
        fontSize: 24,
        
      },
  });