import { View, Text, Button, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={estilos.container}>
      <Text style={{ fontSize: 20 }}>TELA DE LOGIN</Text>
      <Button
        style={{ margin: 10 }}
        title="VOLTAR PARA INÍCIO"
        onPress={() => navigation.goBack()}
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
  }
});