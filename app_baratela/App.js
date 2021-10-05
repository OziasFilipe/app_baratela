import  React,{useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
// imports
import Router from './src/router/Router'
import Context from './src/providers/auth'

export default function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [filtroBusca, setfiltroBusca] = useState('');
  const [imageUrl, setImageUrl] = useState([]);
  const [carMusicvisible, setcarMusicvisible] = useState(false);
  const [nomeMusica, setNomeMusica] = useState('');
  const [nomeCantor,setNomeCantor] = useState('');
  const [urlVideo,setUrlVideo] = useState('');
  const [conexao,setconexao] = useState(false);
  const [asyncStorageNome , setAsyncStorageNome]= useState();
  const [letraMusica , setLetraMusica] = useState();
  const [numeroMusica,setNumeroMusica] = useState(0);
  const [favorito,setFavorito] = useState()
  const [searchDados,setSearchDados] = useState([])
  
  return (
     <Context.Provider value={{
      nome, setNome,
      email, setEmail, 
      filtroBusca, setfiltroBusca,
      imageUrl,setImageUrl,
      carMusicvisible, setcarMusicvisible,
      nomeMusica, setNomeMusica,
      nomeCantor,setNomeCantor,
      urlVideo,setUrlVideo,
      conexao,setconexao,
      asyncStorageNome , setAsyncStorageNome,
      letraMusica , setLetraMusica,
      numeroMusica,setNumeroMusica,
      favorito,setFavorito,
      searchDados,setSearchDados
      }}>

      <NavigationContainer styles = {styles.container}>
        <Router></Router>
      </NavigationContainer>
     </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  }
});
