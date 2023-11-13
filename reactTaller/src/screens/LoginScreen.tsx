import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert, Image } from 'react-native';

const usuario = 'Tomas'
const contraseña = "holachao"
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const navigation = useNavigation();

  const handleLogin = () => {
    if (username === usuario && password === contraseña) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
  };


  return (
    <View style={stylesLogin.container}>
      <Image
        source={require('../imgs/logo.png')} // Reemplaza con la ruta correcta de tu imagen
        style={stylesLogin.logo}
      />

      <Text style={stylesLogin.textL}> Login </Text>
      <Text style={stylesLogin.tB}> Ingresa tus credenciales </Text>
      <TextInput
        style={stylesLogin.input}
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Pressable style={stylesLogin.buttonL} onPress={handleLogin}>
        <Text style={stylesLogin.textButton}>Ingresar</Text>
      </Pressable>
    </View>
  );
};

const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
    paddingTop: 0,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#164863',
  },
  logo: {
    width: '100%', // Utiliza el ancho completo del contenedor
    height: 150,   // Fija la altura según tus necesidades
    resizeMode: 'contain', // Ajusta la forma en que la imagen se ajusta al tamaño del contenedor
    marginBottom: 20,
  },

  textL: {
    fontSize: 60,
    fontWeight: '500',
    color: '#fff',
    marginTop: 20,
    marginBottom: 20,
    letterSpacing: 2,
  },
  tB: {
    marginTop: 20,
    fontSize: 30,
    color: '#fff',
    fontStyle: 'normal',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 0,
    backgroundColor: '#fff',
    alignContent: 'center',
    textAlign: 'center',
    padding: 8,
    margin: 10,
  },
  buttonL: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 0,
    elevation: 3,
    backgroundColor: 'green',
  },
  textButton: {
    color: '#fff',
    fontWeight: '500',
  }
});

export default LoginScreen;
