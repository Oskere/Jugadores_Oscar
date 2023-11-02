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
      return '#1078A5';
    case 'Real Madrid':
      return '#5AE2E9';
    case 'Manchester City':
      return '#7759EA';
    default:
      return 'white';
  }
};

const styles = StyleSheet.create({
      equipos: {
        borderWidth: 2,
        borderColor: "#000000",
        margin: 10,
        fontSize: 24,
      },

  });