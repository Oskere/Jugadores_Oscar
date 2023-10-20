import {View} from "react-native";
import React from "react";

export default function cabecera() {
    return (
        <View style={StyleSheet.container}>
                <Text>Equipo 1</Text>
                <Text>Equipo 2</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },

    contenedor: {
        flex: 1,
    } 

  });