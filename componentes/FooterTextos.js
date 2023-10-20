import {View, Text, StyleSheet} from "react-native";
import React from "react";


export default function FooterTextos(props) {
    return (
            <Text style={styles.equipo}>www.equipo.com</Text>
    )
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