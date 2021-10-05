import * as React from 'react';
import { Text, View, StyleSheet,Platform} from 'react-native';
import Constants from 'expo-constants';

// imports
import { Card,Appbar,BottomNavigation } from 'react-native-paper';


export default function Home() {

  return (
    <View style={styles.container}>
      <View style = {styles.content}>
       <View style = {styles.blockPrimary}>
          <Text style={styles.text}>Contato para suporte</Text>
      </View>
      <View style = {{flex:1,alignItems:'center'}}>
        <View style = {styles.boxPrimary}>
          <Text style = {styles.textMini}>Email:ozias.pecanhaa@gmail.com</Text>
          <Text style = {styles.textMini}>Whatsapp: (27)996444283 </Text>
          <Text style = {styles.textMini}>Coop: DEV_INDIE (Software) </Text>
        </View>
      </View>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  content:{
    flex:1,
  },
  boxPrimary:{
    backgroundColor:'#202625',
    height:'92%',
    width:'90%',
    marginTop:20,
    alignItems:'center',
    justifyContent:'center'
  },
  blockPrimary:{
    backgroundColor:'#111211',
    justifyContent:'center',
    alignItems:'center',
    height:50,
    top:10,
    border:'1px',
    borderRadius:10
  },
  text:{
    fontSize:25,
    color:'white'
  },
  textMini:{
    fontSize:12.5,
    color:'white'
  }
});