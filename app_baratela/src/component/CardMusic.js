import React, { useState, useContext } from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import { StyleSheet, TouchableHighlight, View, Alert } from 'react-native';
import Context from '../providers/auth';
import { WebView } from 'react-native-webview';
import ListaMusicBackEnd from '../backend/ListaMusicBackEnd';
import IsConnected from '../backend/IsConnected';
const CardMusic = (props) => {
  const [visible, setVisible] = React.useState(true);
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
    setconexao,
  } = useContext(Context);

  const showModal = () => setcarMusicvisible(true);
  const hideModal = () => setcarMusicvisible(false);
  const containerStyle = {
    backgroundColor: 'trasparent',
    padding: 1,
    borderColor: '#02E5B0',
    borderWidth: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 293,
    marginLeft: 33,
  };

  return (
    <Provider style={styles.content}>
      <Portal>
        <Modal
          visible={carMusicvisible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <View style={styles.view}>
            {conexao == true ? (
              <WebView
                style={styles.webView}
                source={{ uri: props.urlVideo }}
              />
            ) : (
              <IsConnected />
            )}
          </View>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default CardMusic;

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  webView: {
    flex: 1,
    borderRadius: 5,
  },
  view: {
    borderRadius: 5,
    height: 270,
    width: 290,
  },
});
