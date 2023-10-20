import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Text style={styles.equipo}>Equipo 1</Text>
        <Text style={styles.equipo}>Equipo 2</Text>
        <Text style={styles.equipo}>Equipo 3</Text>
      </View>
      <View style={styles.bodyStyle}>
        <View>
        <Text style={styles.equipo}>Jugador 1.1</Text>
        <Text style={styles.equipo}>Jugador 1.2</Text>
        <Text style={styles.equipo}>Jugador 1.3</Text>
        <Text style={styles.equipo}>Jugador 1.4</Text>
        <Text style={styles.equipo}>Jugador 1.5</Text>
        </View>
        <View style={styles.imageStyle}>
          <Image
            style={styles.image}
            source={{uri: "https://tmssl.akamaized.net/images/foto/galerie/gavi-fc-barcelona-1647531207-82215.jpg?lm=1647531230"}}
          />
        </View>
      </View>
      <View style={styles.footerStyle}>
        <Text style={styles.equipo}>www.equipo.com</Text>
        <Text style={styles.equipo}>123456789</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#000000",
    flex:1
  },
  headerStyle: {
    borderWidth: 2,
    borderColor: "#000000",
    flexDirection: "row",
    height: 100,
    alignItems: "center"
  },
  bodyStyle: {
    borderWidth: 2,
    borderColor: "#000000",
    flex: 1,
    flexDirection: 'row'
  },
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
  image: {
    flex: 2,
  },
  imageStyle: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#000000",
  }
  
});