import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function Observacoes({ navigation }) {
  return (
    <View style={estilos.container}>
      <View style={estilos.textoContainer}>
        <Text style={[estilos.texto, { color: "#5cd2c6" }]}>Olá, Charles</Text>
        <Text style={estilos.texto}>Adicionar observações</Text>
      </View>

      <View style={estilos.inputContainer}>
        <Text style={estilos.texto}>Observações</Text>
        <TextInput style={estilos.input} />
      </View>

      <TouchableOpacity style={estilos.botao}>
        <Text style={estilos.textoBotao}>Gerar Relatório de Desempenho</Text>
      </TouchableOpacity>

      <View style={estilos.botaoContainer}>
      <TouchableOpacity style={estilos.botao}
        onPress={() => navigation.navigate('Observacoes')}>
        <Text style={estilos.textoBotao}>Observações</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilos.botao}
        onPress={() => navigation.navigate('Inicio')}>
        <Text style={estilos.textoBotao}>Voltar para o início</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textoContainer: {
    marginTop: 40,
    paddingVertical: 6,
    fontSize: 26,
    fontWeight: "bold",
    alignItems: 'center',
  },
  texto: {
    paddingVertical: 6,
    fontSize: 26,
    fontWeight: "bold",
  },
  botaoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '80%',
    flex: 1,
    marginBottom: 16
  },
  botao: {
    margin: 5,
    backgroundColor: "#5cd2c6",
    padding: 6,
    borderRadius: 6,
  },
  inputContainer: {
    alignItems: 'center',
    marginBottom: 10
  },
  input: {
    padding: 150,
    width: '75%',
    borderRadius: 10,
    backgroundColor: '#DFE3EE'
  },
  textoBotao: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 24,
    lineHeight: 26,
    fontWeight: "bold",
  }
});
