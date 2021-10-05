import { Card, Appbar, BottomNavigation } from 'react-native-paper';
import * as React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

//Impots Telas
import Home from '../template/Home';
import ListMusic from '../template/ListMusic';
import Favorite from '../template/Favorite';
import Help from '../template/Help';

const TabNavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'home', icon: 'home', color: '#111211' },
    { key: 'lista', title: 'lista', icon: 'book-open', color: '#111211' },
    {
      key: 'favoritos',
      title: 'favoritos',
      icon: 'cards-heart',
      color: '#111211',
    },
    { key: 'ajuda', title: 'ajuda', icon: 'help', color: '#111211' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    lista: ListMusic,
    favoritos: Favorite,
    ajuda: Help,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      color={'red'}
    />
  );
};

export default TabNavigation;
