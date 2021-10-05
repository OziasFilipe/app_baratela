import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Context from '../providers/auth';
import ListaMusicBackEnd from '../backend/ListaMusicBackEnd';
import IsConnected from '../backend/IsConnected';
import { Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ArquivoBackEnd from '../backend/appbar.json';

export default function Start({ navigation }) {
  const {
    nome,
    setNome,
    email,
    setEmail,
    filtroBusca,
    setfiltroBusca,
    imageUrl,
    setImageUrl,
    carMusicvisible,
    setcarMusicvisible,
    nomeMusica,
    setNomeMusica,
    nomeCantor,
    setNomeCantor,
    urlVideo,
    setUrlVideo,
    conexao,
    setconexao,
    asyncStorageNome,
    setAsyncStorageNome,
    letraMusica,
    setLetraMusica,
    numeroMusica,
    setNumeroMusica,
    favorito,
    setFavorito,
    searchDados,
    setSearchDados,
  } = useContext(Context);
  

  const BuscarFavoritos = async () => {
    return setAsyncStorageNome(await AsyncStorage.getAllKeys());
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../Image/logo.png')} style={styles.logo} />

        <View style={styles.viewBotoes}>
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={() => {
              navigation.navigate('Login');
              
            }}>
            <Text style={styles.textPrimary}>CADASTRADO</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonSecundary}
            onPress={() => {
              navigation.navigate('DrawerMenu'),
              setfiltroBusca(searchDados);
                ArquivoBackEnd.results.map((item, index) => {
                  BuscarFavoritos();
                  searchDados.push(item.NomeMusica);
                  
                  return searchDados.push(item.NomeCantor);
                });
            }}>
            <Text style={styles.textSecundary}>CONVIDADO</Text>
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: 'trasparent', height: 0, width: 0 }}>
          <IsConnected />
          
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
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 10,
  },
  buttonPrimary: {
    backgroundColor: '#02E5B0',
    width: 250,
    height: 55,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSecundary: {
    backgroundColor: '#E1224E',
    width: 250,
    marginTop: 33,
    height: 55,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPrimary: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
  textSecundary: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  logo: {
    height: 500,
    width: 500,
    bottom: 80,
  },
});
