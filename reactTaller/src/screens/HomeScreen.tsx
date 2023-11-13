import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

function HomeScreen({ navigation }) {
  const handelPass = () => {
    navigation.navigate('CommandBotScreen');
  };

  return (
    <View style={stylesHome.container}>
      <Text style={stylesHome.tL1}>Home</Text>

      <View style={stylesHome.wrapperContent}>
        <View style={stylesHome.wrapperCard}>
          <Text style={stylesHome.textoCard}>Esta aplicación tiene como finalidad ingresar nuevos comandos al bot de telegram</Text>
        </View>

        <Image
          source={require('../imgs/robot.png')} // Reemplaza con la ruta correcta de tu imagen
          style={stylesHome.robot}
        />
      </View>

      <Pressable style={stylesHome.buttonB} onPress={handelPass}>
        <Text style={stylesHome.textButton}>Ir a comando del bot</Text>
      </Pressable>
    </View>
  );
}

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
    paddingTop: 0,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#164863',
  },
  tL1: {
    marginTop: 100,
    color: '#fff',
    fontSize: 60,
    fontWeight: '500',
  },
  wrapperContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  wrapperCard: {
    flex: 10,
    alignContent: 'center',
    alignItems: 'center',
    width: 300,
    backgroundColor: 'rgba(0,0,0,0.36)',
    borderRadius: 0,
  },
  textoCard: {
    margin: 20,
    color: "#fff",
    fontWeight: '500',
  },
  robot: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  buttonB: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 0,
    elevation: 3,
    backgroundColor: '#427D9D',
  },
  textButton: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default HomeScreen;
