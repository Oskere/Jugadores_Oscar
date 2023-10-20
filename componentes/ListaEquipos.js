import {View, Text, StyleSheet} from "react-native";
import React from "react";
import Equipos from "./Equipos";
export default function ListaEquipos() {
    return (
        <View style={styles.headerStyle}>
          <Equipos nombre="FC Barcelona"></Equipos>
          <Equipos nombre="Real Madrid"></Equipos>
          <Equipos nombre="Bayern Munchen"></Equipos>
      </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        borderWidth: 2,
        borderColor: "#000000",
        flexDirection: "row",
        height: 100,
        alignItems: "center"
      },
  });