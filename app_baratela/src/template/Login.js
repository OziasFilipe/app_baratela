import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {
  Card,
  HelperText,
  TextInput,
  IconButton,
  Colors,
} from 'react-native-paper';

export default function Start({ navigation }) {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View
          style={{
            bottom: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../Image/logo2.png')} style={styles.logo} />
          <View style={styles.viewInput}>
            <TextInput
              label="Email"
              value={text}
              style={{ height: 50, width: 300 }}
            />
            <TextInput
              label="Senha"
              value={text}
              style={{ height: 50, width: 300, top: 20 }}
            />
          </View>

          <View style={styles.viewBotoes}>
            <TouchableOpacity style={styles.buttonPrimary}>
              <Text style={styles.text}>ENTRAR</Text>
            </TouchableOpacity>

            <View style={{ top: 50 }}>
              <TouchableOpacity
                style={{ top: 15 }}
                onPress={() => navigation.navigate('RecoverPassword')}>
                <Text style={styles.textButton_Primary}>Esqueci Senha</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ top: 25 }}
                onPress={() => navigation.navigate('Register')}>
                <Text style={styles.textButton_Secundary}>Cadastrar!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewBotoes: {
    top: 60,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
  },
  buttonPrimary: {
    backgroundColor: '#02E5B0',
    width: 250,
    height: 55,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    top: 50,
  },
  textButton_Primary: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  textButton_Secundary: {
    textAlign: 'center',
    fontSize: 20,
    color: '#E1224E',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
  logo: {
    height: 250,
    width: 250,
    top: 20,
  },
  viewInput: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 50,
  },
});
