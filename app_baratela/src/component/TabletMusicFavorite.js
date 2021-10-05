import React, { useContext, useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Context from '../providers/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Badge } from 'react-native-paper';

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
  } = useContext(Context);

  const [excluir, setExcluir] = useState(false);

  const BuscarFavoritos = () => {
    setExcluir(true);
  };

  const ExlcuirFavoritos = async () => {
    await AsyncStorage.removeItem(props.nome);
    setExcluir(false);
    return setAsyncStorageNome(await AsyncStorage.getAllKeys());
  };

  const saiSelecaoFavorito = () => {
    if (excluir == true) {
      setExcluir(false);
    } 
  };

  var imageAlbum = '../Image/' + 'LegiaoUrbana.jpeg';
  return (
    <TouchableOpacity
      onLongPress={() => {
        BuscarFavoritos();
      }}
      onPress={() => {
        saiSelecaoFavorito();
      }}>
      <View style={styles.contained}>
        <View style={styles.content}>
          <View>
            <Image
              source={require('../Image/ImagemAlbum/alcione.jpeg')}
              style={styles.image}
            />
          </View>
          <View style={{ marginTop: 5, width: 223 }}>
            <Text style={styles.textName} maxLength={10}>Nome: {props.nome}</Text>
            <Text style={styles.textMusic}>Musica: {props.musica}</Text>
          </View>
          <View>
            {excluir == true ? (
              <TouchableOpacity onPress={() => ExlcuirFavoritos()}>
                <Badge size={35}>X</Badge>
              </TouchableOpacity>
            ) : (
              <Text style={styles.textNumber}> {props.numero} </Text>
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
    borderColor: '#02E5B0',
    height: 70,
    justifyContent: 'center',
    opacity: 0.8,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
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
