import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
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

  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <Header equipoSeleccionado={equipoSeleccionado} EquipoSeleccionado={this.EquipoSeleccionado} />
        <Cuerpo equipoSeleccionado={equipoSeleccionado} />
        <Footer />
      </View>
    );
  } else if (Platform.OS === 'android') {
    return (
      <View style={[styles.containerAndroid, { marginTop: StatusBar.currentHeight }]}>
        <Header equipoSeleccionado={equipoSeleccionado} EquipoSeleccionado={this.EquipoSeleccionado}/>
        <Cuerpo equipoSeleccionado={equipoSeleccionado} />
        <Footer />
      </View>
    );
  }
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#000000",
    flex:1
  },  
  containerAndroid: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});