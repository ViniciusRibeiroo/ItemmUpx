import { View, Text, Button, StyleSheet, TextInput, Image } from 'react-native';
import logo from '../assets/logo.png';

export default function Inicio({ navigation }) {
  return (
    <View style={estilos.container}>
      <Image source={logo} style={estilos.logo} />
      <Text style={estilos.texto}> Login </Text>
      <View style={estilos.inputContainer}>
        <Text style={estilos.textoInput}>Email</Text>
        <TextInput style={estilos.input} />
      </View>
      <View style={estilos.inputContainer}>
        <Text style={estilos.textoInput}>Senha</Text>
        <TextInput style={estilos.input} />
      </View>
      <Button
        style={{ flex: 1, justifyContent: "center", padding: 16 }}
        title="Sign In"
        onPress={() => navigation.navigate('Login')}
      />
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  input: {
    paddingHorizontal: 3,
    width: 200,
    borderRadius: 10,
    backgroundColor: '#DFE3EE'
  },
  logo: {
    width: 222,
    height: 97,
    marginTop: 70,
  },
  texto: {
    paddingVertical: 15,
    fontSize: 20,
    fontWeight: "bold"
  },
  textoInput: {
    marginRight: 5,
    fontSize: 14
  }
});