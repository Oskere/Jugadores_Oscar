import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import FooterJugadores from './componentes/FooterJugadores';
import Cuerpo from './componentes/Cuerpo';
import ListaEquipos from './componentes/ListaEquipos';

export default function App() {
  return (
    <View style={styles.container}>
      <ListaEquipos/>
      <Cuerpo/>
      <FooterJugadores/>
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
});