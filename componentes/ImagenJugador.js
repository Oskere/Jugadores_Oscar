import { View,Image,StyleSheet} from "react-native";
import React from "react";

export default function ImagenJugador() {
    return (
        <View style={styles.imageStyle}>
          <Image
            style={styles.image}
            source={{uri: "https://tmssl.akamaized.net/images/foto/galerie/gavi-fc-barcelona-1647531207-82215.jpg?lm=1647531230"}}
          ></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        flex: 4,
        borderWidth: 2,
        borderColor: "#000000",
      },
      image: {
        flex: 1,
      },
  });