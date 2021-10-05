import React, { useContext, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';

// imports
import { Card, Appbar, BottomNavigation } from 'react-native-paper';
import TabletMusic from '../component/TabletMusic';
import ListaMusicBackEnd from '../backend/ListaMusicBackEnd';
import ScreenTab from './ScreenTab';
import Context from '../providers/auth';
import CardMusic from '../component/CardMusic';
import MusicTablet from './MusicTablet';
import ArquivoBackEnd from '../backend/appbar.json';
export default function ListMusic() {
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
    searchDados,
    setSearchDados,
  } = useContext(Context);

  const [dados, setDados] = useState([]);
  return (
    <SafeAreaView style={styles.containerSafeView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.blockPrimary}>
          <Text style={styles.text}>Todas as Musicas A-Z</Text>
        </View>
        <View>
          {ArquivoBackEnd.results.map((item, index) => {

            if(filtroBusca.indexOf(item.NomeCantor, index) > 0){
              
              return (
              <TabletMusic
                style={styles.text}
                nome={item.NomeCantor}
                musica={item.NomeMusica}
                letra={item.LetraMusica}
                numero={item.NumeroMusica}
                audio={item.UrlMusica}></TabletMusic>
            );
            }
            else if( filtroBusca.indexOf(item.NomeCantor)  ==  0){
               return (
              <TabletMusic
                style={styles.text}
                nome={item.NomeCantor}
                musica={item.NomeMusica}
                letra={item.LetraMusica}
                numero={item.NumeroMusica}
                audio={item.UrlMusica}></TabletMusic>
            );
}
             else if( filtroBusca.indexOf(item.NomeMusica)  ==  0){
               return (
              <TabletMusic
                style={styles.text}
                nome={item.NomeCantor}
                musica={item.NomeMusica}
                letra={item.LetraMusica}
                numero={item.NumeroMusica}
                audio={item.UrlMusica}></TabletMusic>
            );
             }
            
            
            
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
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
