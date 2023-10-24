import { View, Text, StyleSheet } from "react-native";
import React, { Component } from "react";
import Equipos from "./Equipos";

export default class ListaEquipos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equipos: ["FC Barcelona", "Real Madrid", "Bayern Munchen"],
    };
  }

  render() {
    return (
      <View style={styles.headerStyle}>
        {this.state.equipos.map((equipo, index) => (
          <Equipos key={index} nombre={equipo} />
        ))}
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
  },
});
