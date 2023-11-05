import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FooterTextos from "./FooterTextos";

export default function FooterJugadores() {
  const datos = [
    { info: "www.equipo.com" },
    { info: "123456789" },
  ];

    if(Platform.OS === 'android') {
      return (
      <View style={styles.headerStyleAndroid}>
        <View style={styles.footerStyleAndroid}>
            <Text style={styles.equipoAndroid}>www.equipo.com</Text>
            <Text style={styles.equipoAndroid}>123456789</Text>
        </View>
      </View>
    )
    } else if(Platform.OS === 'web') {
      return (
        <View style={styles.footerStyle}>
            <Text style={styles.equipo}>www.equipo.com</Text>
            <Text style={styles.equipo}>123456789</Text>
        </View>
    )
    }
}

const styles = StyleSheet.create({
  footerStyle: {
    borderWidth: 2,
    borderColor: "#000000",
    flexDirection: "row",
    height: 100,
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    padding: 10,
  },
  equipo: {
    borderWidth: 2,
    borderColor: "#000000",
    margin: 10,
    fontSize: 24,
  },
  equipoAndroid: {
    fontSize: 16,
    borderWidth: 2,
    textAlign: "center",
    height: 35,
    width: 150,
    backgroundColor: "white",
  },
    footerStyleAndroid: {
      borderWidth: 2,
      borderColor: "#000000",
      flexDirection: "row",
      justifyContent: 'space-between',
      padding: 10,
      width: '95%',
    },
});
