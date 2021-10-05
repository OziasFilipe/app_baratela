import React,{useState,useContext} from 'react'
import {View,Image,Text,StyleSheet} from 'react-native'
import Context from '../providers/auth';
import ListaMusicBackEnd from '../backend/ListaMusicBackEnd'

export default function BlockAlbum(props){
const { 
  nome, setNome,
  email,setEmail,
  filtroBusca,setfiltroBusca,
  imageUrl,setImageUrl } = useContext(Context)
 
  return(
    <View style = {styles.content}>
      <Image source = {ListaMusicBackEnd[3].urlImageAlbum[props.num]} style = {styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({

  content:{
    backgroundColor:'black',
    marginHorizontal:10,
    borderRadius:5,
    marginTop:20
  },
  image:{
    height:125,
    width:125,
    borderRadius:5
  }
})