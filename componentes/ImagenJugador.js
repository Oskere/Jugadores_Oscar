import { Component } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";

export default class Perfil extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      Imagenes1: [{ Gavi: "https://www.estadiodeportivo.com/imagenes/6f6ab392-2357-47c0-a35f-c89c9a4fe73a_1200x680.jpeg" },
      { Pedri: "https://s3.sportstatics.com/relevo/www/multimedia/202310/03/media/cortadas/pedriefe-R9EK73vc3FlUuxHX6rQeQOM-1200x648@Relevo.jpg" },
      { Araujo: "https://estaticos-cdn.prensaiberica.es/clip/d17ec457-b9e0-4f1b-9ea0-c9030e0bb8f3_16-9-discover-aspect-ratio_default_0.jpg" },
      { Lewandowski: "https://www.fcbarcelona.com/fcbarcelona/photo/2023/06/03/d57e8d51-6a12-479a-a702-92eae037f8d2/mini_lewandowski-gol.jpg" },
      { TerStegen: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2022/08/23/6305443bd3aa9.jpeg" },
      { Modric: "https://estaticos-cdn.sport.es/clip/d45c5fa5-27fd-4b14-8f96-ce072cfa4294_alta-libre-aspect-ratio_default_0.jpg" },      
      { Bellingham: "https://img.asmedia.epimg.net/resizer/sjwnmDEC2kGEb9qxHNPKHAGT62w=/360x0/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/B2X7JIO5LNARFDK5EXJRFLVI3A.jpg" },
      { ViniciusJr: "https://fotografias.antena3.com/clipping/cmsimages02/2023/01/27/5B981E9C-06D2-40FA-BB7C-873AA8C14399/vinicius-celebra-gol-atletico-madrid_98.jpg?crop=2152,1211,x0,y0&width=1900&height=1069&optimize=low&format=webply" },
      { Courtois: "https://imagenes.expreso.ec/files/image_700_402/uploads/2022/10/15/634b36061a507.jpeg" },
      { Militao: "https://net-storage.tcccdn.com/storage/bernabeudigital.com/img_notizie/thumb3/60/604fb2a969124646c6b508b37a85552a-53402-983o155o2110o1283z11b3.jpeg" },
      { KevinDeBruyne: "https://estaticos-cdn.sport.es/clip/77a041a8-67f5-4a6c-b9c7-0ef8d0356d3e_alta-libre-aspect-ratio_default_0.jpg" },
      { Haaland: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt3c0ae54700b5d8d2/641ff2cfe39fc72aa89239af/Erling_Haaland.jpg?auto=webp&format=pjpg&width=3840&quality=60" },
      { JAlvarez: "https://assets-es.imgfoot.com/media/cache/642x382/alvarez2324xx.jpg" },
      { Ederson: "https://i.guim.co.uk/img/media/26531e6242feae55c9a18726bc6b3e19619ba0d3/0_186_3810_2286/master/3810.jpg?width=465&dpr=1&s=none"},
      { Grealish: "https://media.rpctv.com/p/0a1b692f28ec86b933eb88156b8fdfaf/adjuntos/314/imagenes/018/218/0018218454/855x0/smart/fotojetjpg.jpg" },
      ],

    }
  }


  render() {
    const { jugadorSeleccionado } = this.props;
    const imagenJugador = this.state.Imagenes1.find(jugador => jugador[jugadorSeleccionado]);

    return (
      <View style={styles.imageStyle}>
      <Image style={styles.image} source={{
                        uri: imagenJugador ? imagenJugador[jugadorSeleccionado] : '',
                    }}></Image>
      </View>
  );
  }
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