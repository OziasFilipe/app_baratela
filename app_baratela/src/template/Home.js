import * as React from 'react';
import { View,StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Constants from 'expo-constants';

// imports
import { Card,Appbar } from 'react-native-paper';
import BlockAlbum from '../component/BlockAlbum'

export default function Home() {


  return (
    
    <SafeAreaView style={styles.containerSafeView}>
      <ScrollView style={styles.scrollView}>
        <View style = {styles.blockPrimary}>
          <Text style={styles.text}>As Playlist mais Populares</Text>
        </View>
        <View>
          <ScrollView horizontal = {true}>
            <BlockAlbum num={0}></BlockAlbum>
            <BlockAlbum num={1}></BlockAlbum>
            <BlockAlbum num={2}></BlockAlbum>
            <BlockAlbum num={3}></BlockAlbum>
            <BlockAlbum num={4}></BlockAlbum>
            <BlockAlbum num={5}></BlockAlbum>
          </ScrollView>
        </View>
        <View style = {styles.blockPrimary}>
          <Text style={styles.text}>Mais Tocadas no Bar</Text>
        </View>
        <View>
          <ScrollView horizontal = {true}>
            <BlockAlbum num={0}></BlockAlbum>
            <BlockAlbum num={1}></BlockAlbum>
            <BlockAlbum num={2}></BlockAlbum>
            <BlockAlbum num={3}></BlockAlbum>
            <BlockAlbum num={4}></BlockAlbum>
            <BlockAlbum num={5}></BlockAlbum>
            </ScrollView>
        </View>
        <View style = {styles.blockPrimary}>
          <Text style={styles.text}>Desafios da Semana</Text>
        </View>
         <View>
          <ScrollView horizontal = {true}>
            <BlockAlbum num={0}></BlockAlbum>
            <BlockAlbum num={1}></BlockAlbum>
            <BlockAlbum num={2}></BlockAlbum>
            <BlockAlbum num={3}></BlockAlbum>
            <BlockAlbum num={4}></BlockAlbum>
            <BlockAlbum num={5}></BlockAlbum>
            </ScrollView>
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
  }
});


