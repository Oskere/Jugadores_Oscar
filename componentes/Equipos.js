import { Text, View } from "react-native"
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

function Equipo(props) {

  const equipoColor = props.equipo === props.equipoSeleccionado ? cambiarColor(props.equipo) : 'white';
  return (
      <>
        <TouchableOpacity 
        style={[styles.equipos, { backgroundColor: equipoColor }]}
        onPress={() => props.EquipoSeleccionado(props.equipo)}>
            
          <Text>{props.equipo}</Text>
        </TouchableOpacity>
      </>
    );
  }
  
export default Equipo;

const cambiarColor = (equipo) => {
  switch (equipo) {
    case 'FC Barcelona':
      return '#0a19b8';
    case 'Real Madrid':
      return '#8f19d6';
    case 'Manchester City':
      return '#54c1ef';
    default:
      return 'white';
  }
};

const styles = StyleSheet.create({
      equipos: {
        borderWidth: 2,
        borderColor: "#000000",
        margin: 10,
        borderRadius: 10,
        fontSize: 24,
      },

  });