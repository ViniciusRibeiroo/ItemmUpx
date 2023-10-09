import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';

export default function Avaliacao({ navigation }) {
  return (
    <View style={estilos.container}>
      <Image source={logo} style={estilos.logo} />
      <Text style={estilos.texto}>Avaliação Quadrimestral</Text>      
      <TouchableOpacity style={estilos.botao}>
        <Text style={estilos.textoBotao}>Observações</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilos.botao}
        onPress={() => navigation.navigate('Inicio')}>
        <Text style={estilos.textoBotao}>Voltar para o início</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 20
  },
  texto: {
    paddingVertical: 15,
    fontSize: 20,
    fontWeight: "bold"
  },
  logo: {
    width: 222,
    height: 97,
    marginTop: 70,
  },
  botao: {
    margin: 5,
    backgroundColor: "#89D0C4",
    padding: 6,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  }
});