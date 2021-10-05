import React, { useContext, useState,useRef } from 'react';
import { Text, View, StyleSheet, Platform, DrawerActions } from 'react-native';
import Constants from 'expo-constants';

// imports
import { Card, Appbar, BottomNavigation } from 'react-native-paper';
import TabNavigation from '../component/BottomTabNavigation';
import { Searchbar } from 'react-native-paper';
import ListaMusicBackEnd from '../backend/ListaMusicBackEnd';
import Context from '../providers/auth';
import ArquivoBackEnd from '../backend/appbar.json';
export default function ScreenTab({ navigation }) {
  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

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

  const [dados, setDados] = useState([]);
 
  const [searchQuery, setSearchQuery] = React.useState('');
  const teste = ['banana', 'maca', 'abacate'];

  const onChangeSearch = (query) => {

    if(query.length > 0){
      
    
    
    if (searchQuery == ' ' || searchQuery == '  ') {
     
    }
    else {
    setfiltroBusca(
      searchDados.filter((fruta) => {
        return fruta.includes(searchQuery.trim());
      })
    );
  }
} else{
  setSearchQuery("");
  setfiltroBusca(searchDados)
}
 
  }

  const submitHandler = () => { //runs on submit and sets the state to nothing.
	onChangeSearch("");
 }
  return (
    <View style={styles.container}>
      <View>
        <Appbar.Header style={styles.appbarNavigationContent}>
          <Appbar.Action
            icon="menu"
            onPress={() => {
              navigation.openDrawer('DraweMenu');
            }}
          />
          <Searchbar
            placeholder="Search"
              onSubmitEditing={submitHandler}
            onChangeText={(event) => {
              setSearchQuery(event);
              onChangeSearch(event);
            }}
           
            value={searchQuery}
            style={styles.search}
            iconColor={'white'}
            placeholderTextColor="white"
            color="white"
          />
        </Appbar.Header>
      </View>
      <View style={styles.content}>
        <Text style={{ color: 'white' }}></Text>
      </View>

      <TabNavigation style={styles.appbarNavigationContent}></TabNavigation>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  content: {},
  appbarNavigationContent: {
    top: 15,
    backgroundColor: '#111211',
    alignItems: 'center',
  },
  search: {
    backgroundColor: '#111211',
    height: 35,
    width: '70%',
    color: 'white',
    marginLeft: 5,
    marginTop: 8.5,
  },
});
