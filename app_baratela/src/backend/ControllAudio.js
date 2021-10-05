import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { Audio } from 'expo-av';
import * as MediaLibrary from 'expo-media-library';
import { IconButton, Colors } from 'react-native-paper';

const FilesList = (props) => {
  const [path, setPath] = useState(
    'https://firebasestorage.googleapis.com/v0/b/suaserie-on.appspot.com/o/Musica%2FThe%20Shins%20-%20A%20Comet%20Appears.mp3?alt=media&token=89ed1522-6cff-4ac3-89b5-80024d6a1f54'
  );
  const [state, setState] = useState({
    isPlaying: false,
    playbackInstance: null,
    currentIndex: 0,
    volume: 1.0,
    isBuffering: true,
  });

  const onPlaybackStatusUpdate = (status) => {
    setState((curState) => ({
      ...curState,
      isBuffering: status.isBuffering,
    }));
  };

  const loadAudio = async () => {
    const { isPlaying, volume } = state;

    try {
      const playbackInstance = new Audio.Sound();
      const source = {
        uri: path,
      };

      const status = {
        shouldPlay: isPlaying,
        volume: volume,
      };

      playbackInstance.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      await playbackInstance.loadAsync(source, status, false);

      setState((curState) => ({
        ...curState,
        playbackInstance,
      }));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
          playsInSilentModeIOS: true,
          interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
          shouldDuckAndroid: true,
          staysActiveInBackground: true,
          playThroughEarpieceAndroid: true,
        });

        loadAudio();
      } catch (e) {
        console.log(e);
      }
    };
    loadData();
  }, []);

  const PlayPauseHandler = async () => {
    const { isPlaying, playbackInstance } = state;
    console.log(state);
    isPlaying
      ? await playbackInstance.pauseAsync()
      : await playbackInstance.playAsync();

    setState((curState) => ({
      ...curState,
      isPlaying: !isPlaying,
    }));
  };

  const PlayFetchedDataHandler = async () => {
    let { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === 'granted') {
      let media = await MediaLibrary.getAssetsAsync({
        mediaType: ['audio'],
      });
      let data = await MediaLibrary.getAssetInfoAsync(media.assets[0]);
      // setPath((path) => data.uri); // setting data.uri as path doesn't work
      PlayPauseHandler();

      console.log(data.uri);
    }
  };

  return (
    <View>
      <IconButton
        icon="play-circle-outline"
        color={Colors.white}
        size={50}
        onPress={() => alert('Não está disponivel no momento')}
      />
    </View>
  );
};

export default FilesList;
