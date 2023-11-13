import { Alert } from 'react-native';

export default async function postCommmand(data) {
    try {
        const response = await fetch('http://192.168.1.11:3000/api/command', {//localhost -> http://IPV:3000
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log("Success:", result);
        Alert.alert('Success', 'Comando enviado satisfactoriamente', [{ text: 'OK', onPress: () => console.log('OK Pressed') },]);
    } catch (error) {
        Alert.alert('Error', 'no se pudo Enviar el comando', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },]);
    }
}

