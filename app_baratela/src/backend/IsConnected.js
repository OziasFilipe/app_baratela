// https://aboutreact.com/react-native-netinfo/

// import React in our code
import React, { useState, useEffect,useContext } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text, Button,Image } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Context from '../providers/auth'

const App = () => {
  const [netInfo, setNetInfo] = useState('');
  const { 
    nome, 
    setNome, 
    email, 
    setEmail,   
    filtroBusca, 
    setfiltroBusca,
    carMusicvisible, 
    setcarMusicvisible,
    conexao,
    setconexao } = useContext(Context)

  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetInfo(
        `Connection type: ${state.type}
        Is connected?: ${state.isConnected}
        IP Address: ${state.details.ipAddress}`
      );
      setconexao(state.isConnected);
      if(state.details.ipAddress == undefined){
        setconexao(false);
      }
    });

    return () => {
      // Unsubscribe to network state updates
      unsubscribe();
      
    };
  }, []);

  const getNetInfo = () => {
    // To get the network state once
    NetInfo.fetch().then((state) => {
      alert(
        `Connection type: ${state.type}
        Is connected?: ${state.isConnected}
        IP Address: ${state.details.ipAddress}`
      );
      
     
    });
  };

  return (
      
    <SafeAreaView style={{ flex: 1 }}>
      {conexao == false?
        <View style={styles.container}>
          <Text style={styles.header}>
           
            {'\n'}
            Por favor, verifique sua conexão com a internet!
          </Text>
          <Text style={styles.textStyle}>
            {/*Here is NetInfo to get device type*/}
            {netInfo}
          </Text>
          <Image source = {require("../Image/SemConexao.png")} style = {styles.imagem}/>
        </View>
       : console.log('conectado')} 
    </SafeAreaView>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 0,
    justifyContent: 'center',
    alignItems:'center'
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
   
  },
  textStyle: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    
  },
  imagem:{
    width:100,
    height:100
  }
});

export default App;
