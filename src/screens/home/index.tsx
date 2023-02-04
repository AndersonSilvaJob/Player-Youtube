import { useCallback, useState} from "react";
import { View, ActivityIndicator, useWindowDimensions, Alert} from "react-native";
import YoutubeIframe, {PLAYER_STATES} from 'react-native-youtube-iframe';
import * as ScreenOrientation from 'expo-screen-orientation';

import { styles, VIDEO_HEIGHT, SCREEN_SPACE} from "./style";

export function Home(){

  const [videoReady, setVideoReady] = useState(false);
  const {width} = useWindowDimensions()
  const VIDEO_WIDTH = width - (SCREEN_SPACE * 2)

  const onFullScreenChange = useCallback((isFullScreen: boolean) => {
    //console.log(isFullScreen);
    if(isFullScreen){
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }else{
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  },[]);

  const onChangeState = useCallback((state: string)=> {
    //console.log(state)
    if (state === PLAYER_STATES.ENDED) {
      Alert.alert("E ai, curtiu ?", "Não deixe de curtir, comentar e seguir o canal!");
    }
  },[]);

  return(
    
    <View style={styles.container}>
    <View style={styles.Player}>
      <YoutubeIframe videoId="_Yhyp-_hX2s"
      width={VIDEO_WIDTH}
      height={videoReady ? VIDEO_HEIGHT : 0}
      onReady={() => setVideoReady(true) }
      onFullScreenChange={onFullScreenChange}
      onChangeState={onChangeState}
      />

      {!videoReady && <ActivityIndicator color="red" />}
    </View>

     <View style={styles.Player}>
      <YoutubeIframe videoId="r_0JjYUe5jo"
      width={VIDEO_WIDTH}
      height={videoReady ? VIDEO_HEIGHT : 0}
      onReady={() => setVideoReady(true) }
      onFullScreenChange={onFullScreenChange}
      onChangeState={onChangeState}
      />

      {!videoReady && <ActivityIndicator color="red" />}
    </View>


    <View style={styles.Player}>
      <YoutubeIframe videoId="uelHwf8o7_U"
      width={VIDEO_WIDTH}
      height={videoReady ? VIDEO_HEIGHT : 0}
      onReady={() => setVideoReady(true) }
      onFullScreenChange={onFullScreenChange}
      onChangeState={onChangeState}
      />

      {!videoReady && <ActivityIndicator color="red" />}
    </View>
    </View>
  );
}