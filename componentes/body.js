import {View, Button, Image} from "react-native";
import React from "react";

import { StyleSheet, Text, View, Button } from 'react-native';

export default function body() {
    return (
        <View style={StyleSheet.contenedor}>
            <View style = {StyleSheet.contenedor}>

                    <Text style={styles.text}>{title}</Text>
                

                    <Text>Jugador 1.2</Text>


                    <Text>Jugador 1.3</Text>


                    <Text>Jugador 1.4</Text>
                
                    <Text>Jugador 1.5</Text>
            </View>
            <View>

            </View>
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