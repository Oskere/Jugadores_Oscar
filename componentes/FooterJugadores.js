import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FooterTextos from "./FooterTextos";

export default function FooterJugadores() {
  const datos = [
    { info: "www.equipo.com" },
    { info: "123456789" },
  ];

  return (
    <View style={styles.footerStyle}>
      {datos.map((item, index) => (
        <FooterTextos key={index} info={item.info}/>
      ))}
    </View>
  );
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
});
