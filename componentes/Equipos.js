import {View, Text, StyleSheet} from "react-native";
import React from "react";

export default function Equipos(props) {
    return (
        <Text style={styles.equipo}>{props.nombre}</Text>
    )
}

const styles = StyleSheet.create({
      equipo: {
        borderWidth: 2,
        borderColor: "#000000",
        margin: 10,
        fontSize: 24,
      },

  });