import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
//import postCommmand from '../components/Command';

export default function CommandBotScreen() {
  const [command, setCommand] = useState('');
  const [instruction, setInstruction] = useState('');
  const sendCommand = async () => {
    console.log("sending");
    //postCommmand({ "command": command, "message": instruction });
  };

  return (
    <View style={stylesBot.container}>
      <Text style={stylesBot.tL}> Command</Text>
      <View>
        <Text style={stylesBot.tB}> Ingresar comandos</Text>
        <TextInput
          style={stylesBot.input}
          placeholder="Comando"
          value={command}
          onChangeText={(text) => setCommand(text)}
        />
        <TextInput
          style={stylesBot.input}
          placeholder="instruccion"
          value={instruction}
          onChangeText={(text) => setInstruction(text)}
        />
        <Pressable style={stylesBot.buttonC} onPress={sendCommand}>
          <Text style={stylesBot.textButtonC} > Enviar </Text>
        </Pressable>
      </View>
    </View>
  );

}


const stylesBot = StyleSheet.create({
  container: {
    flex: 1,
    pading: 100,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#164863',
  },
  tL: {
    fontSize: 50,
    fontWeight: '500',
    color: '#fff',
    marginTop: 100,
    marginBottom: 20,
  },
  tB: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: '500',
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
  buttonC: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 0,
    elevation: 3,
    backgroundColor: '#427D9D',
  },
  textButtonC: {
    color: '#fff',
    fontWeight: '500',
  },
})
