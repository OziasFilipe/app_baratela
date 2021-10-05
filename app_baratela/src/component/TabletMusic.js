import React, { useContext, useState } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  WebView,
  Alert,
} from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import CardMusic from './CardMusic';
import Context from '../providers/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import ArquivoBackEnd from '../backend/appbar.json';
import MusicTablet from '../template/MusicTablet';

export default function BlockAlbum(props) {
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
  alert(asyncStorageNome)
    getDados(nome);
  };
  const getDados = async (item) => {
    return setAsyncStorageNome(await AsyncStorage.getAllKeys());
  };

  const [salvar, setSalvar] = useState(false);
  const selecionarfavorito = () => {
    setSalvar(true);
  };
  const saiSelecaoFavorito = (nome, musica, urlVideo, letra, numero, audio) => {
    if (salvar == true) {
      setSalvar(false);
    } else {
      setNumeroMusica(numero);
      setNomeCantor(nome);
      setNomeMusica(musica);
      setUrlVideo(urlVideo);
      setcarMusicvisible(true);
      setLetraMusica(letra);
      setImageUrl(audio);
    }
  };
  const favoritar = (nome) => {
    setSalvar(false);
    Armazenando(nome);
  };

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onLongPress={() => {
        selecionarfavorito();
      }}
      onPress={() => {
        saiSelecaoFavorito(
          props.nome,
          props.musica,
          props.urlVideo,
          props.letra,
          props.numero,
          props.audio
        );
        navigation.navigate('MusicTablet');
        setNumeroMusica(props.numero);
      }}>
      <View style={styles.contained}>
        <View style={styles.content}>
          <View>
            <Image
              source={require('../Image/ImagemAlbum/LegiaoUrbana.jpeg')}
              style={styles.image}
            />
          </View>
          <View style={{ marginTop: 5, width: 223 }}>
            <Text style={styles.textName} maxLength={10}>
              Nome: {props.nome}
            </Text>
            <Text style={styles.textMusic}>Musica: {props.musica}</Text>
          </View>
          <View>
            {salvar == true ? (
              <IconButton
                icon="cards-heart"
                color={Colors.red500}
                size={20}
                onPress={() => {
                  favoritar(props.nome);
                }}
              />
            ) : (
              <Text style={styles.textNumber}>{props.numero}</Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contained: {
    backgroundColor: '#202625',
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#E1224E',
    height: 70,
    justifyContent: 'center',
    opacity: 0.8,
  },
  content: {
    flex: 1,
    alignContent: 'center',
    flexDirection: 'row',
  },
  image: {
    height: 62,
    width: 62,
    borderRadius: 5,
    marginLeft: 5,
    marginTop: 2.5,
  },
  textName: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  textMusic: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  textNumber: {
    color: 'white',
    fontSize: 17,
    marginRight: 5,
    marginTop: 5,
  },
});
