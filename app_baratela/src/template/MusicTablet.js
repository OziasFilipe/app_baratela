import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import Context from '../providers/auth';
import ArquivoBackEnd from '../backend/appbar.json';
import ControllAudio from '../backend/ControllAudio';
export default function MusicTablet(props) {
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
  } = useContext(Context);
  
  const Armazenando = (async(nome)=>{

   alert("salvo")
   this.setAsyncStorageNome =  await AsyncStorage.setItem(nome,nome);

 
 getDados(nome)
    
})
const getDados = (async(item)=>{
  
 return setAsyncStorageNome( await AsyncStorage.getAllKeys())
})

const favoritar = (()=>{
    
  Armazenando(nomeCantor);
})

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style = {{flexDirection:"column",flex:1,top:30 }}>
          <View
            style={{
              flexDirection: 'row',
              
            }}>
            
            <Text style={styles.text_primary}>{nomeCantor}</Text>
            
            <IconButton
              icon="cards-heart"
              color={Colors.red500}
              size={35}
              onPress={() => {favoritar()} }
            />
          </View>
          <Text style={styles.text_secundary}>{nomeMusica}</Text>
          
          
        </View>
        <View style={styles.iconStyle}>
          <IconButton
            icon="skip-previous"
            color={Colors.white}
            size={35}
            onPress={() => NaoDisponivel()}
          />

          <ControllAudio />
          <IconButton
            icon="skip-next"
            color={Colors.white}
            size={35}
            onPress={() => NaoDisponivel()}
          />
        </View>
        <View style={styles.blockLetra}>
          <Text style={styles.text_tree}>Letra</Text>
          <Text style={styles.text_quad}>{letraMusica}</Text>
        </View>
      </View>
    </View>
  );
}

function NaoDisponivel() {
  return alert("Função nao Disponivel");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    
  },
  content: {
    
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  iconStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text_primary: {
    color: 'white',
    fontSize: 25,
    rigth:100
  },
  text_secundary: {
    color: 'white',
    fontSize: 15,
  },
  text_tree: {
    color: 'white',
    fontSize: 23,
  },
  text_quad: {
    color: '#32a844',
    fontSize: 30,
    textAlign: 'center',
  },
  blockLetra: {
    backgroundColor: '#200f3b',
    borderRadius: 10,
    width: 310,
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
