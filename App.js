import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,Image} from 'react-native';
import ListaEquipos from './componentes/ListaEquipos';
import Cuerpo from './componentes/Cuerpo';
import FooterJugadores from './componentes/FooterJugadores';
import { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        equipoSeleccionado: 'FC Barcelona',
    };
}


EquipoSeleccionado = (equipo) => {
  this.setState({ equipoSeleccionado: equipo });
}

  
render() {
  const { equipoSeleccionado } = this.state;

  return (
      <View style={styles.container}>
          <ListaEquipos EquipoSeleccionado={this.EquipoSeleccionado} equipoSeleccionado={equipoSeleccionado}/>
          <Cuerpo equipoSeleccionado={equipoSeleccionado} />

          <FooterJugadores />
      </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#000000",
    flex:1
  },  
});