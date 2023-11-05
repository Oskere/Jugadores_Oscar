import { View } from "react-native"
import Equipos from "./Equipos"
import { StyleSheet } from "react-native";
import React, { Component } from 'react'

export default class ListaEquipos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            equipos: ['FC Barcelona', 'Real Madrid', 'Manchester City'],
        };
    }

    render() {
        const { EquipoSeleccionado, equipoSeleccionado } = this.props;
        const { equipos } = this.state;

        return (
            <View style={styles.headerStyle}>
                {equipos.map((equip, index) => {
                    return (
                        <Equipos key={index} equipo={equip} EquipoSeleccionado={EquipoSeleccionado} equipoSeleccionado={equipoSeleccionado}/>
                    )
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
  headerStyle: {
    borderWidth: 2,
    borderColor: "#000000",
    flexDirection: "row",
    height: 100,
    alignItems: "center",
  }
});
