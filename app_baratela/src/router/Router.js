import  React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';


//Imports Telas
import Start from '../template/Start'
import Login from '../template/Login'
import Register from '../template/Register'
import RecoverPassword from '../template/RecoverPassword'
import ScreenTab from '../template/ScreenTab'
import Home from '../template/Home'
import ListMusic from '../template/ListMusic'
import Favorite from '../template/Favorite'
import Help from '../template/Help'
import MusicTablet from '../template/MusicTablet'

const Stack = createNativeStackNavigator();

function Router() {
  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Start" component={Start}  />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
        <Stack.Screen name="DrawerMenu" component={DrawerMenu} />
       
      </Stack.Navigator>
    
  );
}

function DrawerMenu() {
const Drawer = createDrawerNavigator();
  return (
   
      <Drawer.Navigator initialRouteName="Principal"   screenOptions={{ headerShown: false,drawerStyle: {backgroundColor:'#202625', drawerItemStyle:{backgroundColor:'white',color:'white'}}} }  style = {styles.drawerContent} title= 'teste' >
        <Drawer.Screen name="Principal" component={ScreenTab} screenOptions = {{drawerStyle:{backgroundColor:'white'}}}  />
        <Drawer.Screen name="Lista De Musica" component={ListMusic} />
        <Drawer.Screen name="Favoritos" component={Favorite} />
        <Drawer.Screen name="Ajuda" component={Help} />
        <Drawer.Screen name="Sair" component={Router} />
        <Drawer.Screen name="MusicTablet" component={MusicTablet} />
      </Drawer.Navigator>
   
  );}

  const Tab = createBottomTabNavigator();

 function BottomNavigation() {
  return (
   
      <Tab.Navigator initialRouteName="ScreenTab"  screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Login" component={Login}  />
        <Tab.Screen name="Lista Musica" component={ListMusic} />
       
      </Tab.Navigator>
    
  );
}

export default Router;


const styles = StyleSheet.create({

  drawerContent:{
    backgroundColor:'white'
    
  },
  item:{
    backgroundColor:'white'
  }
})


