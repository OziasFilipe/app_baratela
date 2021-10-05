import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import { Card,HelperText, TextInput  } from 'react-native-paper';

export default function Start() {

 const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <View style = {styles.content}>
        <View style = {{bottom:60,justifyContent:'center',alignItems:'center'}}>
      <Image source = {require('../Image/logo2.png')} style = {styles.logo}/>
      <View style = {styles.viewInput}>
        <TextInput label="Nome" value={text} style= {{height:50, width:300}} />
        <TextInput label="Email" value={text} style= {{height:50,width:300,top:20}} />
        <TextInput label="Senha" value={text} style= {{height:50,width:300,top:40}} />
      </View>
          <TouchableOpacity style = {styles.buttonPrimary}>
            <Text style = {styles.text}>Criar Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'black'
  },
  content:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonPrimary:{
     backgroundColor:'#E1224E',
    width:250,
    height:55,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    top:130
  },
   text:{
    textAlign:'center',
    fontSize:20,
    color:'white'
  },
  logo:{
    height:250,
    width:250,
    top:20
  },
  viewInput:{
    alignItems:'center',
    justifyContent:'center',
    top:50
  }
});
