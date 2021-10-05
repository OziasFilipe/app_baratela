import React, { useContext, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
} from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
// imports
import { Card, Appbar, BottomNavigation } from 'react-native-paper';
import TabletMusicFavorite from '../component/TabletMusicFavorite';
import Context from '../providers/auth';
import ListaMusicBackEnd from '../backend/ListaMusicBackEnd';
import CardMusic from '../component/CardMusic';
import ArquivoBackEnd from '../backend/appbar.json';

export default function Favorite(props) {
  //<TabletMusicFavorite nome ={nome} musica = {ListaMusicBackEnd[1].musica[index]}/>
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
  } = useContext(Context);

  const Armazenando = async (nome) => {
    this.setAsyncStorageNome = await AsyncStorage.setItem(nome, nome);
    alert(asyncStorageNome);
    getDados(nome);
  };
  const getDados = async () => {
    if (asyncStorageNome.indexOf(item.NomeCantor, index) >= 0) {
    }
    return setAsyncStorageNome(await AsyncStorage.getAllKeys());
  };

  return (
    <SafeAreaView style={styles.containerSafeView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.blockPrimary}>
          <Text style={styles.text}>Musicas Favoritadas</Text>
        </View>
        <View></View>
        {ArquivoBackEnd.results.map((item, index) => {
          if (asyncStorageNome.indexOf(item.NomeCantor,index) >= 0) {
            if (filtroBusca.indexOf(item.NomeCantor, index) > 0) {
              return (
                <TabletMusicFavorite
                  nome={item.NomeCantor}
                  musica={item.NomeMusica}
                  letra={item.LetraMusica}
                  numero={item.NumeroMusica}
                  audio={item.UrlMusica}
                />
              );
            } else if (filtroBusca.indexOf(item.NomeCantor) == 0) {
              return (
                <TabletMusicFavorite
                  nome={item.NomeCantor}
                  musica={item.NomeMusica}
                  letra={item.LetraMusica}
                  numero={item.NumeroMusica}
                  audio={item.UrlMusica}
                />
              );
            } else if (filtroBusca.indexOf(item.NomeMusica) == 0) {
              return (
                <TabletMusicFavorite
                  nome={item.NomeCantor}
                  musica={item.NomeMusica}
                  letra={item.LetraMusica}
                  numero={item.NumeroMusica}
                  audio={item.UrlMusica}
                />
              );
            }
          }
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
async function dadosGet() {
  return AsyncStorage.multiRemove();
}
const styles = StyleSheet.create({
  containerSafeView: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollView: {
    backgroundColor: 'black',
    marginHorizontal: 2,
    marginVertical: 2,
  },
  blockPrimary: {
    backgroundColor: '#111211',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    top: 10,
    border: '1px',
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
    color: 'white',
  },
});
