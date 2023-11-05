import { View } from "react-native"
import { StyleSheet } from "react-native"
import ListaJugadores from "./ListaJugadores"
import Perfil from "./ImagenJugador"
import React, { Component } from 'react'


export default class Cuerpo extends Component {
    constructor(props) {
      super(props);
      this.state = {
            jugadorSeleccionado: "Gavi"
      }
    }

   
 jugadorSeleccionado = (jugador) => {
    this.setState({ jugadorSeleccionado: jugador });
  }
  
    render() {
      const { equipoSeleccionado } = this.props;
      const { jugadorSeleccionado } = this.state;

      if (Platform.OS === 'android') {
        return (
          <View style={styles.bodyStyleAndroid}>
            <View style={styles.div}>
              <Perfil jugadorSeleccionado={jugadorSeleccionado} />
            </View>
            <View style={styles.div2}>
              <ListaJugadores equipoSeleccionado={equipoSeleccionado} jugadorSeleccionado={this.jugadorSeleccionado} JugadorSeleccionado={this.state.jugadorSeleccionado} />
            </View>
          </View>
        );
      } else if (Platform.OS === 'web') {
        return (
          <View style={styles.bodyStyle} >
            <ListaJugadores equipoSeleccionado={equipoSeleccionado} jugadorSeleccionado={this.jugadorSeleccionado} JugadorSeleccionado={this.state.jugadorSeleccionado} />
            <Perfil jugadorSeleccionado={jugadorSeleccionado} />
          </View>
        );
      }
    }
  }

const styles = StyleSheet.create({
   
    bodyStyle: {
        borderWidth: 2,
        borderColor: "#000000",
        flex: 1,
        flexDirection: 'row'
      },
      bodyStyleAndroid: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      div: {
        width: '95%',
        height: '47%',
        marginBottom: 5,
      },
      div2: {
        width: '95%',
        height: '50%',
        marginBottom: 5,
      },
  });